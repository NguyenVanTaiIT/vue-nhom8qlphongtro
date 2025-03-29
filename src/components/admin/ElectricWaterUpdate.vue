<template>
    <div class="service-body">
        <LeftSideBar></LeftSideBar>
        <div class="background-service">
            <HeaderAdmin></HeaderAdmin>
            <div class="service">
                <h3 style="text-align: center;">Cập Nhật {{ electricWater.serviceName }} </h3>
                <div class="container">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <label for="oldIndex">Chỉ số cũ:</label><br>
                            <input id="oldIndex" v-model="electricWater.oldIndex" class="form-control" placeholder="Nhập Số lượng" >
                            <br>
                            <label for="newIndex">Chỉ số mới:</label><br>
                            <input id="newIndex" v-model="electricWater.newIndex" class="form-control" placeholder="Nhập Số lượng" >
                            <br>
                            <label for="status">Kích hoạt?</label><br>
                            <input style="float: left;" id="status" v-model="electricWater.status" type="checkbox" >
                            <br>
                            <button v-on:click="update" class="btn btn-primary">Chỉnh Sửa</button>
                            <br><br>
                            <a v-on:click="goBack" href="#" >Trở về trước đó</a>
                        </div>
                        <div class="col-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
            </div>
            <div style="height: 150px;" ></div>
            <div><FooterAdmin></FooterAdmin></div>
        </div>
    </div>
</template>

<script>
import ElectricWaterService from '@/services/ElectricWaterService';
import LeftSideBar from './LeftSideBar.vue';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';


export default {
    name: 'AddServiceToRent',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data(){
        return{

           electricWater:{
                id:'',
                oldIndex:'',
                newIndex:'',
                status:'',
                serviceName:'',
                rentRoomId:''
           }
        }
    },
    methods:{

       async loadData(){
            let result = await ElectricWaterService.getById(this.$route.params.id);
            this.electricWater = result.data;
       },
       async update(){

            await ElectricWaterService.update(this.$route.params.id, this.electricWater);
            this.$router.push(`/admin/manageRent/${this.$route.params.idn}`);
        },
        goBack(){
            this.$router.push('/admin/manageRent/'+this.$route.params.idn);
        }
        

    },
    async mounted(){
            await this.loadData();
    }
}



</script>



<style scoped>
@import url(../../assets/css/service.css);
</style>