<template>
    <header>
        <div class="logo">
            <img src="../../assets/img/LOGO.jpg" style="width: 70%; height: 70%;">
        </div>
        
        <div class="header-navbar" style="width: 100%;">
            <div>
            <div class="search-box">
                <button>
                <i class="fa-solid fa-magnifying-glass"></i></button>
                <input id="key" v-on:keyup="searchEnter"  class="inputTim" type="search" placeholder="Nhập từ khóa và ấn enter để tìm kiếm.">
            </div>
            </div>
            <a href="/">Trang Chủ</a>
            <a v-on:click="goToRooms" href="#">Nhà Trọ</a>
            <a href="#" v-on:click="goToAboutUs">Về chúng tôi</a>
            <a href="#" v-on:click="goToContact">Liên hệ</a>
            <div v-if="checkUserLogin()" class="dropdown">
                <a href="#" >Hóa đơn</a>
                <div class="dropdown-content">
                    <a class="dropdown-item" v-on:click="goToDepositOrder" href="#">Hóa đơn tiền đặt cọc</a>
                    <a class="dropdown-item" v-on:click="goToRoomOrder" href="#">Hóa đơn tiền phòng</a>
                </div>
            </div>
            <div v-if="username!='User not found!'" class="dropdown">
                <a href="#">Xin chào: {{ username }}</a>
                <div class="dropdown-content">
                    <a v-on:click="profile" class="dropdown-item" href="#">Thông tin</a>
                    <a v-on:click="myRoom" class="dropdown-item" href="#">Phòng của bạn</a>
                    <a v-on:click="logout" class="dropdown-item" href="#">Đăng xuất</a>
                </div>
            </div>
            <button v-else v-on:click="login">Đăng nhập</button>
        </div>
    </header>
</template>

<script>

import AuthService from '@/services/AuthService';
import '@fortawesome/fontawesome-free/css/all.css';



export default{
    name: 'HeaderPage',
    data(){
        return{
            username:''
        }
    },
    methods:{
        search(){
            const BtnTim = document.querySelector('.fa-magnifying-glass');
            const searchBox = document.querySelector('.search-box');
            BtnTim.addEventListener('click', () => {
            searchBox.classList.toggle('search-box-active');
            });
        },
        searchEnter: function(e) {
            if(e.keyCode === 13){
                let key = document.getElementById('key').value;
                window.location.href = `/search?key=${key}`
            }  
        }
        ,
        login(){
            this.$router.push({name:'LoginPage'});
        }
        ,
        signUp(){
            this.$router.push({name:'SignUp'});
        },
        async getUserLogin(){
            const response = await AuthService.getUserLogin();
            return response.data;
        },
        async logout(){
            await AuthService.logout(window.localStorage.getItem("refreshToken"));
            window.localStorage.clear();
            this.$router.push({name:'LoginPage'});
        },
        goToRooms(){
            this.$router.push({name:'RoomsPage'});
        },
        checkUserLogin(){
            let token = localStorage.getItem('jwtToken');
            if(token){
                return true;
            }
            return false;
        },
        goToAboutUs(){
            this.$router.push({name:'AboutUsPage'});
        },
        goToContact(){
            this.$router.push({name:'ContactPage'});
        },
        profile(){
            this.$router.push({name:'ProfilePage'});
        },
        goToDepositOrder(){
            this.$router.push('/rentRoomOrder');
        },
        goToRoomOrder(){
            this.$router.push('/roomOrder');
        },
        myRoom(){
            this.$router.push('/myRoom');
        }
        
    },

    async mounted(){
        this.search();
        this.username = await this.getUserLogin();
    },

    

}

</script>

<style scoped >
@import url(../../assets/css/WebsiteCSS/header.css);
</style>