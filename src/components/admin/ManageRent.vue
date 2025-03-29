<template>
    
    <div class="service-body">
        <LeftSideBar></LeftSideBar>
        <div class="background-service">
            <HeaderAdmin></HeaderAdmin>
            <div class="service">
                <h3 style="text-align: center;">QUẢN LÝ THUÊ PHÒNG</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <p>Tên Khách Hàng: {{ rent.userName }}</p>
                            <p>Phòng: {{ rent.roomName }}</p>
                            <p>Trạng Thái: {{ rent.status }}</p>
                            <p>Ngày Đặt: {{ format_date(rent.checkInDate) }}</p>
                            <p>Tiền Đặt Cọc: {{ formatPrice(rent.depositPrice) }}đ</p>
                            <p>Số lượng thành viên: {{ rent.quantityPeople }}</p>
                            <p>Ngày Tạo: {{ format_date(rent.creationDate) }}</p>
                        </div>
                        <div class="col-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <h5>Quản Lý:</h5>
                            <ul>
                                <li><a v-on:click="goToServiceUses()" href="#" >Thêm dịch vụ</a></li>
                            </ul>
                            <ul v-for="item in ElectricWaters" :key="item.id" >
                                <li>{{ item.serviceName }} || <a v-on:click="goToUpdateElectricWater(item.id)" href="#" >Tùy chỉnh</a> </li>
                            </ul>
                            <ul v-for="item in others" :key="item.id" >
                                <li>{{ item.serviceName }} || <a v-on:click="goToUpdate(item.id)" href="#" >Tùy chỉnh</a> </li>
                            </ul>
                            <br>
                            <RouterLink to="/admin">Trở lại trang quản lý thuê</RouterLink>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
            </div>
            <div><FooterAdmin></FooterAdmin></div>
        </div>
    </div>
    
</template>

<script>
import RentRoomService from '@/services/RentRoomService';
import LeftSideBar from './LeftSideBar.vue';
import OtherServiceService from '@/services/OtherServiceService';
import ElectricWaterService from '@/services/ElectricWaterService';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';
import moment from 'moment';


export default {
    name: 'ManageRent',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data(){
        return{
            rent:{
                id:'',
                status:'',
                checkInDate:'',
                checkOutDate:'',
                depositPrice:'',
                quantityPeople:'',
                creationDate:'',
                roomName:'',
                userName:''
            },
            others:[],
            ElectricWaters:[]
        }
    },
    methods:{

        async loadData(){
            let result = await RentRoomService.getRentRoom(this.$route.params.id);
            this.rent = result.data;
        },
        goToServiceUses(){
            this.$router.push(`/admin/manageRent/services/${this.$route.params.id}`);
        },
        async loadListService(){
            let result = await OtherServiceService.getAllByRentRoomId(this.$route.params.id);
            this.others = result.data;
        },
        goToUpdate(id){
            this.$router.push(`/admin/update-otherService/${this.$route.params.id}/${id}`);
        },
        async loadListElectricWater(){
            let result = await ElectricWaterService.getAllByRentRoom(this.$route.params.id);
            this.ElectricWaters = result.data;
        },
        goToUpdateElectricWater(id){
            this.$router.push(`/admin/update-ElectricWater/${this.$route.params.id}/${id}`);
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY');
            }
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }


    },
    mounted(){
        this.loadData();
        this.loadListService();
        this.loadListElectricWater();
    }

}



</script>



<style scoped>
@import url(../../assets/css/service.css);
</style>