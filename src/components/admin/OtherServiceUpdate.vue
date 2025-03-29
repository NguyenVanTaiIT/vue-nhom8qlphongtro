<template>
    <div class="service-body">
        <LeftSideBar></LeftSideBar>
        <div class="background-service">
            <HeaderAdmin></HeaderAdmin>
            <div class="service">
                <h3 style="text-align: center;">Cập Nhật Dịch Vụ</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <label for="quantity">Số lượng:</label><br>
                            <input id="quantity" v-model="otherService.quantity" class="form-control" placeholder="Nhập Số lượng" >
                            <br>
                            <label for="status">Kích hoạt?</label><br>
                            <input style="float: left;" id="status" v-model="otherService.status" type="checkbox" >
                            <br>
                            <button v-on:click="update" class="btn btn-primary">Chỉnh Sửa</button>
                            <br><br>
                            <a href="#" v-on:click="goToManageRent" >Trở về trước đó</a>
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
            <div style="height: 170px;" ></div>
            <div><FooterAdmin></FooterAdmin></div>
        </div>
    </div>
</template>

<script>
import LeftSideBar from './LeftSideBar.vue';
import OtherServiceService from '@/services/OtherServiceService';
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

           otherService:{
                id:'',
                quantity:'',
                status:'',
                serviceName:'',
                rentRoomId:''
           }
        }
    },
    methods:{

       async loadData(){
            let result = await OtherServiceService.getById(this.$route.params.id);
            this.otherService = result.data;
       },
       async update(){

            await OtherServiceService.update(this.$route.params.id, this.otherService);
            this.$router.push(`/admin/manageRent/${this.$route.params.idn}`);
        },
        goToManageRent(){
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