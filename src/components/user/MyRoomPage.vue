<template>
    <HeaderPage></HeaderPage>
    <div style="height: 150px;"></div>
    <h2 v-if="!rent" style="color: green; text-align: center;" >Bạn chưa thuê phòng nào!</h2>
    <div v-else>
      <h2 style="text-align: center;" >Danh Sách Phòng Của Bạn</h2>          
      <table class="UserRoomTable">
        <thead>
          <tr>
            <th>Phòng</th>
            <th>Ngày Bắt Đầu Thuê</th>
            <th>Tiền Đặt Cọc</th>
            <th>Số lượng người</th>
            <th>Chi Tiết</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in rent" :key="item.id">
            <td>{{item.roomName}}</td>
            <td>{{format_date(item.checkInDate)}}</td>
            <td>{{formatPrice(item.depositPrice)}}đ</td>
            <td>{{item.quantityPeople}}</td>
            <td>
              <a v-on:click="returnToRentDetail(item.id)" href="#" >Xem chi tiết</a>
              <br>
              <a v-on:click="checkOut(item.id)" href="#">Trả phòng</a>
            </td>
          </tr>
        </tbody>
      </table>
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
    name:'MyRoomPage',
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
            const response = await RentRoomService.getAllRoomRentedByUser();
            this.rent = response.data;
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
        await this.loadData();  
    }

}

</script>

<style scoped >
@import url(../../assets/css/WebsiteCSS/MyRoomPage.css);
</style>