<template>
    <div class="left-wrapper">
        <div class="left">
            <h3>Quản lý nhà trọ</h3>
            <h4 style="text-align: center;">HUYCONY</h4>
            <img src="../../assets/img/admin.png">
            <h4 style="text-align: center;">Xin chào Quản Lý</h4>
            <br>
            <a v-on:click="goToHome" href="#" id="home"><i class="fa-solid fa-house"></i> Trang Chủ</a>
            <a v-on:click="goToManageRoom" href="#">Quản Lý Phòng</a>
            <a v-on:click="goToMotels" href="#" >Danh Sách Nhà Trọ</a>
            <a v-on:click="goToFloors" href="#" >Danh Sách Tầng</a>
            <a v-on:click="goToCategories" href="#" >Danh Sách Loại</a>
            <a v-on:click="goToOrders" href="#">Danh Sách Hóa Đơn</a>
            <a v-on:click="goToSendMail" href="#" >Gửi Mail</a>
            <a v-on:click="goToStatistical" href="#" >Thống Kê</a>
            <a v-on:click="goToConfig" href="#">Cấu Hình</a>
            <a v-on:click="logout">Đăng Xuất</a>
        </div>
    </div>


</template>

<script>
import AuthService from '@/services/AuthService';


export default{
    name:'LeftSideBar',
    methods:{
        async logout(){
            await AuthService.logout(window.localStorage.getItem("refreshToken"));
            window.localStorage.clear();
            this.$router.push({name:'LoginPage'});
        },
        goToConfig(){
            this.$router.push('/admin/config');
        },
        checkLogin(){
            let token = localStorage.getItem('jwtToken');
            if(!token){
                this.$router.push('/login');
            }
        },
        goToCategories(){
            this.$router.push('/admin/categories');
        },
        goToHome(){
            this.$router.push('/admin');
        },
        goToFloors(){
            this.$router.push('/admin/floors');
        },
        goToManageRoom(){
            this.$router.push('/admin/rooms');
        },
        goToMotels(){
            this.$router.push('/admin/motels');
        },
        goToOrders(){
            this.$router.push('/admin/motels');
        },
        goToSendMail(){
            this.$router.push('/admin/rentRoom-sendMail');
        },
        goToStatistical(){
            this.$router.push('/admin/statistical');
        }
    },
    mounted(){
        this.checkLogin();
    }
}


</script>



<style>
@import url(../../assets/css/left.css);
</style>