<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div class="AminHome">
                <h2>Cấu hình</h2>
            </div>
            <div class="AdminTable">
                <h5>Tự động phê duyệt đơn thuê phòng: </h5>
                <h6 style="color: green;" v-if="settingRent.isActive==true" >Trạng thái: Đang Bật</h6>
                <h6 style="color: gray;" v-else >Trạng thái: Đang Tắt</h6>
                <label class="switch">
                    <input v-model="settingRent.isActive" id="status" v-on:change="updateStatus" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
            <div style="height: 63%;" ></div>
            <FooterAdmin></FooterAdmin>
        </div>
    </div>
</template>



<script>
import LeftSideBar from './LeftSideBar.vue';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';
import SettingRentService from '@/services/SettingRentService'




export default {
    name: 'ConfigPage',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            settingRent:{
                id:'',
                isActive:''
            }
        }
    },
    methods: {
        async loadData() {
            let response = await SettingRentService.get();
            this.settingRent = response.data;
        },
        async updateStatus(){
            let checkbox = document.getElementById('status');
            if(checkbox.checked==true){
                this.settingRent.isActive = true;
            }
            else
                this.settingRent.isActive = false;
            await SettingRentService.updateStatus(this.settingRent);
            await this.loadData();
        }

    },
    mounted() {
         this.loadData();

    }



}

</script>

<style scoped>
@import url(../../assets/css/admin.css);
@import url(../../assets/css/config.css);

</style>