<template>
<HeaderPage></HeaderPage>
<div style="height: 150px;"></div>
<h2 v-if="!orderRoom" style="color: green; text-align: center;" >Bạn chưa có hóa đơn nào!</h2>
<div v-else>
  <h2 style="text-align: center;" >Danh Sách Hóa Đơn Tiền Phòng Của Bạn</h2>          
  <div style="padding: 4%;">
  <table class="OrderTable">
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
        <th>Ngày Tạo</th>
        <th>Trạng Thái</th>
        <th>Chức Năng</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orderRoom" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.roomName}}</td>
        <td>{{ item.nameCustomer }}</td>
        <td>{{ formatPrice(item.roomPrice) }}đ</td>
        <td>{{ formatPrice(item.waterPrice) }}đ</td>
        <td>{{ formatPrice(item.electricPrice) }}đ</td>
        <td>{{ formatPrice(item.otherServicePrice) }}đ</td>
        <td>{{ formatPrice(item.totalPrice) }}đ</td>
        <td>{{ format_date(item.createDate) }}</td>
        <td>{{ item.paymentStatus }}</td>
        <td v-if="item.paymentStatus=='Chờ thanh toán'||item.paymentStatus=='Thanh toán VNPay thất bại!'" ><a v-on:click="payment(item.id)" href="#">Thanh toán</a></td>
        <td v-else ><div class="showBillbtn"><a v-on:click="showBill(item.id)" href="#" >Hiển thị hóa đơn</a></div></td>
      </tr>
    </tbody>
  </table>
</div>
</div>
<div style="height: 150px;" ></div>
<FooterPage></FooterPage>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import OrderRoomService from '@/services/OrderRoomService';
import moment from 'moment';

export default{
    name:'RoomOrder',
    data(){
        return{
            orderRoom:[]
        }
    },
    components:{
        HeaderPage,
        FooterPage
    },
    methods:{
        async loadData(){
            let response  = await OrderRoomService.getAllOrderRoomByUser();
            return response.data;
        },
        async payment(id){
            let response = await OrderRoomService.createVnPayUrl(id);
            window.location.href = response.data;
        },
        showBill(id){
          this.$router.push(`/RoomBill/${id}`);
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
    async mounted(){
        this.orderRoom = await this.loadData();
    }
        

}

</script>

<style scoped >
@import url(../../assets/css/WebsiteCSS/home.css);
@import url(../../assets/css/WebsiteCSS/preload.css);
@import url(../../assets/css/WebsiteCSS/RoomOrder.css);
</style>