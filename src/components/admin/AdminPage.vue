<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div class="AminHome">
                <h2>QUẢN LÝ THUÊ</h2>
            </div>
            <h3 v-if="!rents" style="color: orangered;text-align: center;" >Chưa có danh sách thuê phòng</h3>
            <div v-else class="AdminTable">
                <h3>Danh sách thuê phòng:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Tài khoản</th>
                            <th style="width: 150px;">Phòng</th>
                            <th>Tiền đặt cọc</th>
                            <th style="width: 30px">Số lượng người</th>
                            <th style="width: 100px;">Ngày tạo</th>
                            <th style="width: 100px;">Ngày thuê</th>
                            <th>Trạng thái</th>
                            <th style="width: 200px;">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in rents" :key="item.id">
                            <td>{{ item.userName }}</td>
                            <td>{{ item.roomName }}</td>
                            <td>{{ formatPrice(item.depositPrice) }}đ</td>
                            <td>{{ item.quantityPeople }}</td>
                            <td>{{ format_date(item.creationDate) }}</td>
                            <td>{{ format_date(item.checkInDate) }}</td>
                            <td>{{ item.status }}</td>
                            <td>
                                <a v-if="item.status == 'Chờ phê duyệt'" v-on:click="confirm(item.id)" href="#" class="PheDuyetBTN"><img
                                        src="../../assets/img/accept.png" style="width: 20px;" />Phê duyệt</a>
                                <a v-if="item.status == 'Chờ phê duyệt'" v-on:click="unConfirm(item.id)" href="#" class="KhongPDBTN"><img
                                        src="../../assets/img/decline.png" style="width: 25px;" />Không phê duyệt</a>
                                <a v-if="item.status == 'Đã thanh toán tiền đặt cọc bằng VNPay.'"
                                    v-on:click="manageRent(item.id)" href="#" class="QuanLyBTN"><img
                                        src="../../assets/img/setting.png" style="width: 24px;" />Quản lý</a>
                                <a v-if="item.status == 'Đã thanh toán tiền đặt cọc bằng VNPay.'" v-on:click="checkOut(item.id)" href="#"
                                    class="TraPhongBTN"><img src="../../assets/img/checkout.png" style="width: 24px;" />
                                    Trả phòng</a>
                                <a v-if="item.status == 'Đã thanh toán tiền đặt cọc bằng VNPay.'"
                                    v-on:click="createOrder(item.id)" href="#" class="ThuTienBTN"><img
                                        src="../../assets/img/money.png" style="width: 24px;" /> Thu Tiền Trọ </a>
                                <a v-if="item.status == 'Đã duyệt cần người dùng đặt cọc'||item.status == 'Thanh toán VNPay thất bại!'"
                                    v-on:click="unRent(item.id)" href="#" class="QuaHanBTN"><img
                                        src="../../assets/img/full-time.png" style="width: 24px;" /> Quá hạn chờ </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <FooterAdmin></FooterAdmin>
            </div>
        </div>
    </div>
</template>



<script>
import LeftSideBar from './LeftSideBar.vue';
import RentRoomService from '@/services/RentRoomService';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';
import moment from 'moment';





export default {
    name: 'AdminPage',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            rents: []
        }
    },
    methods: {
        async loadData() {
            const response = await RentRoomService.getAllRentRoom();
            this.rents = response.data;
        },
        manageRent(id) {
            this.$router.push(`/admin/manageRent/${id}`);
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        createOrder(id) {
            this.$router.push(`/admin/create-order/${id}`);
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY');
            }
        },
        async unRent(id){
            await RentRoomService.unRent(id);
            await this.loadData();
        },
        async confirm(id){
            await RentRoomService.updateConfirmRent(id, true);
            await this.loadData();
        },
        async unConfirm(id){
            await RentRoomService.updateConfirmRent(id, false);
            await this.loadData();
        },
        async checkOut(id){
              await RentRoomService.checkOutRoom(id);
              await this.loadData();
        }

    },
    async mounted() {
        await this.loadData();

    }



}

</script>

<style scoped>
@import url(../../assets/css/admin.css);
</style>