<template>
    <div class="service-body">
        <LeftSideBar></LeftSideBar>
        <div class="background-service">
            <HeaderAdmin></HeaderAdmin>
            <div class="service">
                <div style="height: 50px;">
                    <div v-if="alertMessage" class="alert" :class="alertType">
                    {{ alertMessage }}
                    <button @click="closeAlert">x</button>
                    </div>
                </div>
                <h3 style="text-align: center;">Danh Sách Dịch Vụ</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Tên Dịch Vụ</th>
                                        <th>Giá Thành</th>
                                        <th>Chức Năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in electricWater" :key="item.id" >
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.price }}</td>
                                        <td><a v-on:click="addElectricWater(item.id)" href="#">Thêm dịch vụ</a></td>
                                    </tr>
                                    <tr v-for="item in services" :key="item.id" >
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.price }}</td>
                                        <td><a v-on:click="addService(item.id)" href="#">Thêm dịch vụ</a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                            <a href="#" v-on:click="goToManageRent" >Trở về trước đó</a>
                            <br><br>
                            <RouterLink to="/admin">Trở lại trang chủ</RouterLink>
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
import OtherServiceService from '@/services/OtherServiceService';
import LeftSideBar from './LeftSideBar.vue';
import ServiceRoomService from '@/services/ServiceRoomService';
import ElectricWaterService from '@/services/ElectricWaterService';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';


export default {
    name: 'ServiceUses',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data(){
        return{
            services:[],
            electricWater:[],
            alertMessage: '',
            alertType: ''
        }
    },
    methods:{

        showAlert(message, type) {
            this.alertMessage = message;
            this.alertType = type;
            setTimeout(this.closeAlert, 3000); 
        },
        closeAlert() {
            this.alertMessage = '';
            this.alertType = '';
        },
        async loadData(){
            let result = await ServiceRoomService.getWithOutElectricWater();
            let result1 = await ServiceRoomService.getOnlyElectricWater();
            this.services = result.data;
            this.electricWater = result1.data;
        },
        async addService(id){
            if(await this.checkService(id)){
                this.$router.push(`/admin/addServiceToRent/${this.$route.params.id}/${id}`);
            }
            else{
                this.showAlert('Dịch vụ đã tồn tại.', 'error');
            }
        },
        async addElectricWater(id){
            if(await this.checkElectricWater(id)){
                this.$router.push(`/admin/addElectricWaterToRent/${this.$route.params.id}/${id}`);
            }
            else{
                this.showAlert('Dịch vụ đã tồn tại.', 'error');
            }
        },
        async checkService(id){
            let result = await OtherServiceService.checkByidRentAndIdService(this.$route.params.id, id);
            console.log(result.data);
            if(result.data=="Có thể tạo."){
                return true;
            }
            else{
                return false;
            }
        },
        async checkElectricWater(id){
            let result = await ElectricWaterService.checkByServiceAndRent(this.$route.params.id,id);
            console.log(result.data);
            if(result.data=="Có thể tạo."){
                return true;
            }
            else{
                return false;
            }
        },
        goToManageRent(){
            this.$router.push(`/admin/manageRent/${this.$route.params.id}`);
        }

    },
    mounted(){
        this.loadData();
    }

}



</script>



<style scoped>
@import url(../../assets/css/service.css);
.alert {
    padding: 15px;
    position: fixed; 
    top: 80px; 
    right: 20px; 
    border: 1px solid transparent;
    border-radius: 8px; 
    max-width: 300px; 
    width: auto; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); 
    font-size: 16px;
    z-index: 1000; 
  }
  
  .alert.success {
    background: green; 
    color: white;
  }
  
  .alert.error {
    background: red; 
    color: white;
  }
  
  .alert.info {
    background: linear-gradient(45deg, #a1c4fd, #c2e9fb); 
    color: #084298;
  }
  
  .alert.warning {
    background: linear-gradient(45deg, #ffe29f, #ffa99f); 
    color: #856404;
  }
  
  button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #000;
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  
  button:hover {
    opacity: 1;
  }

</style>