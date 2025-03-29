<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div class="AminHome">
                <h2>Danh Sách Hóa Đơn</h2>
            </div>
            <div class="AdminTable">
                <h3>Danh sách thuê phòng:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Hóa Đơn</th>
                            <th>Phòng</th>
                            <th>Tên Khách Hàng</th>
                            <th>Giá Phòng</th>
                            <th>Giá Nước</th>
                            <th>Giá Điện</th>
                            <th>Giá Dịch Vụ</th>
                            <th>Tổng Cộng</th>
                            <th style="width: 100px;" >Ngày Tạo</th>
                            <th>Trạng Thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in orders" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.roomName }}</td>
                            <td>{{ item.nameCustomer }}</td>
                            <td>{{ formatPrice(item.roomPrice) }}đ</td>
                            <td>{{ formatPrice(item.waterPrice) }}đ</td>
                            <td>{{ formatPrice(item.electricPrice) }}đ</td>
                            <td>{{ formatPrice(item.otherServicePrice) }}đ</td>
                            <td>
                                <br>
                                {{ formatPrice(item.totalPrice) }}đ
                            </td>
                            <td>{{ format_date(item.createDate) }}</td>
                            <td>{{ item.paymentStatus }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <FooterAdmin></FooterAdmin>
        </div>
    </div>


</template>



<script>
import LeftSideBar from './LeftSideBar.vue';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';
import OrderRoomService from '@/services/OrderRoomService';
import moment from 'moment';





export default {
    name: 'ListOrderRoom',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            orders: []
        }
    },
    methods: {
        async loadData() {
            const response = await OrderRoomService.getAll();
            this.orders = response.data;
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY');
            }
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