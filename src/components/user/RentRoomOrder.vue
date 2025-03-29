<template>
  <HeaderPage></HeaderPage>
  <div style="height: 150px;"></div>
  <h2 v-if="!rent" style="color: green; text-align: center;" >Bạn chưa có hóa đơn nào!</h2>
  <div v-else>
    <h2 style="text-align: center;" >Danh Sách Hóa đơn Tiền Đặt Cọc Của Bạn</h2>     
    <div style="display: grid; place-items: center;">
    <table class="table-order">
      <thead>
        <tr>
          <th>Tài khoản</th>
          <th>Phòng</th>
          <th>Ngày Bắt Đầu Thuê</th>
          <th>Tiền Đặt Cọc</th>
          <th>Số lượng người</th>
          <th>Ngày Tạo</th>
          <th>Trạng Thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in rent" :key="item.id">
          <td>{{item.userName}}</td>
          <td>{{item.roomName}}</td>
          <td>{{format_date(item.checkInDate)}}</td>
          <td>{{formatPrice(item.depositPrice)}}đ</td>
          <td>{{item.quantityPeople}}</td>
          <td style="width: 150px;">{{format_date(item.creationDate)}}</td>
          <td>{{item.status}}</td>
          <td v-if="item.status=='Đã thanh toán tiền đặt cọc bằng VNPay.'"  style="text-align: center;">
            <a v-on:click="returnToRentDetail(item.id)" class="btnXCT" href="#" >Xem chi tiết</a>
            <br/>
            <br/>
            <a v-on:click="checkOut(item.id)" class="btnTP" href="#">Trả phòng</a>
          </td>
          <td v-else-if="item.status=='Đã duyệt cần người dùng đặt cọc'||item.status=='Thanh toán VNPay thất bại!'" ><a v-on:click="deposite(item.id)" href="#">Đặt cọc</a></td>
          <td v-else-if="item.status=='Đã trả phòng.'" ><a v-on:click="returnToRentDetail(item.id)" class="btnXCT" href="#" >Xem chi tiết</a></td>
          <td v-else>Chức năng chưa mở</td>
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
import RentRoomService from '@/services/RentRoomService';
import moment from 'moment';


export default{
  name:'RentRoomOrder',
  data(){
      return{
          rent:[]
      }        
  },
  components:{
      HeaderPage,
      FooterPage
  },
  methods:{
      async loadData(){
          const response = await RentRoomService.getAllRentRoomByUser();
          return response.data;
      },
      async deposite(id){
            const response = await RentRoomService.createVnPayUrl(id);
            location.href= response.data;
      },
      formatPrice(value) {
          let val = (value / 1).toFixed(0).replace('.', ',');
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
      returnToRentDetail(id){
          this.$router.push(`/rentRoomOrder/${id}`);
      },
      async checkOut(id){
            await RentRoomService.checkOutRoom(id);
            await this.loadData();
      },
      format_date(value) {
          if (value) {
              return moment(String(value)).format('DD/MM/YYYY');
          }
      }

  },
  async mounted(){
    this.rent = await this.loadData();  
  }

}

</script>

<style scoped >
/* @import url(../../assets/css/WebsiteCSS/home.css); */
@import url(../../assets/css/WebsiteCSS/preload.css);
@import url(../../assets/css/WebsiteCSS/RentRoomOrder.css);
</style>