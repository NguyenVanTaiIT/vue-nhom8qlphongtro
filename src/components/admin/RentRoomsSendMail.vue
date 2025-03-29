<template>
    <div class="service-body">
        <LeftSideBar></LeftSideBar>
        <div class="background-service">
            <HeaderAdmin></HeaderAdmin>
            <div class="service">
                <div style="height: 50px;">
                    <div v-if="alertMessage" class="alert" :class="alertType">
                        {{ alertMessage }}
                        <button class="CloseAlert" @click="closeAlert">x</button>
                    </div>
                </div>
                <h3 style="text-align: center;">Danh Sách Gửi Mail</h3>
                <h3 v-if="!orders" style="color: orangered;text-align: center;" >Chưa có danh sách gửi mail</h3>
                <div v-else class="container">
                    <table class="SendMailTable">
                        <thead>
                            <tr>
                                <th>Khách hàng</th>
                                <th>Hóa đơn</th>
                                <th>Phòng</th>
                                <th>Giá phòng</th>
                                <th>Giá Nước</th>
                                <th>Giá Điện</th>
                                <th>Giá Dịch Vụ</th>
                                <th>Tổng Thu</th>
                                <th>Trạng Thái</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in orders" :key="item.id">
                                <td>{{ item.nameCustomer }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.roomName }}</td>
                                <td>{{ formatPrice(item.roomPrice) }}đ</td>
                                <td>{{ formatPrice(item.waterPrice) }}đ</td>
                                <td>{{ formatPrice(item.electricPrice) }}đ</td>
                                <td>{{ formatPrice(item.otherServicePrice) }}đ</td>
                                <td>{{ formatPrice(item.totalPrice) }}đ</td>
                                <td>{{ item.paymentStatus }}</td>
                                <td>
                                    <a href="#" class="SendMailbtn"
                                        v-if="item.paymentStatus == 'Thanh toán VNPay thất bại!' || item.paymentStatus == 'Chờ thanh toán'"
                                        v-on:click="sendMail(item.id)"> Gửi Mail </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <FooterAdmin></FooterAdmin>
        </div>
    </div>
</template>

<script>
import LeftSideBar from './LeftSideBar.vue';
import SendMailService from '@/services/SendMailService';
import OrderRoomService from '@/services/OrderRoomService';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';

export default {
    name: 'RentRoomsSendMail',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            orders: [],
            alertMessage: '',
            alertType: ''
        }
    },
    methods: {
        showAlert(message, type) {
            this.alertMessage = message;
            this.alertType = type;
            setTimeout(this.closeAlert, 3000);
        },
        closeAlert() {
            this.alertMessage = '';
            this.alertType = '';
        },
        async loadData() {
            let result = await OrderRoomService.getAll();
            this.orders = result.data;
        },
        async sendMail(id) {
            try {
                this.error = null;
                let response = await SendMailService.SendMail(id);
                if (response.data != 'Lỗi trong quá trình gửi mail!') {
                    this.showAlert(response.data, 'success');
                }
                else {
                    this.showAlert(response.data, 'error');
                }

            } catch (error) {
                if (error.response) {
                    console.error("Response error:", error.response);
                } else if (error.request) {
                    console.error("No response received:", error.request);
                } else {
                    console.error("Error setting up request:", error.message);
                }
            }

        },

        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }


    },
    async mounted() {
        await this.loadData();

    }

}



</script>



<style scoped>
@import url(../../assets/css/SendMail.css);
</style>