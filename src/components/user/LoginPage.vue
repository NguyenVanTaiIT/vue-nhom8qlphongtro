<template>
<div class="body-login">
    <div class="wrapper">
            <h1>Đăng Nhập</h1>
            <div style="color: red;" v-if="errorMessage" class="error">{{ errorMessage }}</div>
            <div class="input-box">
                <input v-model="user.username" type="text" placeholder="Tên tài khoản" required>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input v-model="user.password" type="password" placeholder="Mật khẩu" required>
                <i class="fa-solid fa-lock"></i>
            </div>
            <button v-on:click="login" class="btnDN">Đăng nhập</button>
            <div class="register-link">
                <p>Chưa có tài khoản? <a v-on:click="goToSignUp" href="#">Đăng ký</a></p>
            </div>
    </div>
</div>
</template>

<script>
import AuthService from '@/services/AuthService';


export default{
    name:'LoginPage',
    data() {
    return {
      user: {
        username: "",
        password: "",
      },
      errorMessage:""
    };
  },
  methods: {
    async login() {
          
      if(this.user.username&&this.user.password){
        try {
          const response = await AuthService.login(this.user);
          if (response.data) {
                console.log(response.data);
                window.localStorage.clear();
                window.localStorage.setItem("jwtToken", response.data.accessToken);
                window.localStorage.setItem("refreshToken", response.data.token);
                const response1 = await AuthService.getRole(response.data.accessToken);
                console.log(response1.data);
                if(response1.data == "USER"){
                    window.location.href = "/";
                }
                else if(response1.data == "ADMIN"){
                    window.location.href = "/admin";
                } 
          }
        } catch (error) {
          if (error.response.status === 403) {
            this.errorMessage = "Tài khoản hoặc mật khẩu không đúng.";
          }
        }
        
      }
      else{
        this.errorMessage = "Tài khoản và mật khẩu không được để trống.";
      }
            
    },
    isLogin(){
      if(window.localStorage.getItem("jwtToken")){
        this.$router.push("/");
      }
    },
    goToSignUp(){
      this.$router.push('sign-up');
    }   
  },
  mounted(){
    this.isLogin();
  }
}





</script>

<style scoped>
@import url(../../assets/css/login.css);
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Updock&display=swap');
</style>