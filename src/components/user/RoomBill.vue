<template>
    <HeaderPage></HeaderPage>
    <div class="BillBox">
        <div class="BillBG"></div>
        <div class="Bill">
            <div class="BillDetail">
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h1 style="line-height: 120px;">Hóa đơn</h1>
                    </div>
                    <div class="col-6">
                        <img src="../../assets/img/LOGO.jpg" style="width: 250px;">
                    </div>
                </div>
                <br>
                <h3>Nhà trọ HUYCONY</h3>
                <div class="row">

                    <div class="col-6">
                        <P>Tên khách hàng: {{ order.nameCustomer }}</P>
                        <p>Số điện thoại: {{ order.phone }}</p>
                    </div>
                    <div class="col-6">
                        <p>Hóa đơn: #{{ order.id }}</p>
                        <p>Ngày: {{ format_date(order.createDate) }}</p>
                        <p>Trạng thái: {{ order.paymentStatus }}</p>
                    </div>
                </div>
                <div class="DotLine" style="margin-top: 5%;"></div>
                <table>
                    <tbody>
                        <tr>
                            <th>Mục</th>
                            <th>Giá</th>
                        </tr>
                        <tr>
                            <td>Tiền điện</td>
                            <td>{{ formatPrice(order.electricPrice) }}đ</td>
                        </tr>
                        <tr>
                            <td>Tiền nước</td>
                            <td>{{ formatPrice(order.waterPrice) }}đ</td>
                        </tr>
                        <tr>
                            <td>Tiền dịch vụ</td>
                            <td>{{ formatPrice(order.otherServicePrice) }}đ</td>
                        </tr>
                        <tr>
                            <td>Tiền trọ</td>
                            <td>{{ formatPrice(order.roomPrice) }}đ</td>
                        </tr>
                    </tbody>
                </table>
                <p style="font-weight: bold; text-align: right; font-size: clamp(10px, 1.5vw,100px); margin-top: 5%;">
                    TỔNG TIỀN: <span style="color: red;">{{ formatPrice(order.totalPrice) }}đ</span></p>
            </div>
        </div>
    </div>
    <FooterPage></FooterPage>
</template>


<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import OrderRoomService from '@/services/OrderRoomService';
import moment from 'moment';

export default {
    name: 'RoomBill',
    components: {
        HeaderPage,
        FooterPage
    },
    data() {
        return {
            order: ''
        }
    },
    methods: {
        async loadData() {
            let response = await OrderRoomService.getOrderRoomById(this.$route.params.id);
            this.order = response.data;
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
@import url(../../assets/css/WebsiteCSS/HoaDon.css);
</style>