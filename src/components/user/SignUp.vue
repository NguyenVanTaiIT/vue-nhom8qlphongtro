<template>
    <div class="body-signUp">
        <div class="wrapper">
            <h1>ĐĂNG KÝ</h1>
            <div style="color: red;" v-if="errorMessage.email" class="error">{{ errorMessage.email }}</div>
            <div style="color: red;" v-if="errorMessage.name" class="error">{{ errorMessage.name }}</div>
            <div style="color: red;" v-if="errorMessage.password" class="error">{{ errorMessage.password }}</div>
            <div style="color: red;" v-if="errorMessage.phone" class="error">{{ errorMessage.phone }}</div>
            <div style="color: red;" v-if="errorMessage.username" class="error">{{ errorMessage.username }}</div>
            <div class="input-box">
                <input v-model="user.name" type="text" placeholder="Tên của bạn" required>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input v-model="user.username" type="text" placeholder="Tên tài khoản" required>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input v-model="user.password" type="password" placeholder="Mật khẩu" required>
                <i class="fa-solid fa-lock"></i>
            </div>
            <div class="input-box">
                <input v-model="user.email" type="email" placeholder="Email" required>
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="input-box">
                <input v-model="user.phone" type="tel" placeholder="Số điện thoại" required>
                <i class="fa-solid fa-phone"></i>
            </div>
            <button v-on:click="signUp" class="btnDK">Đăng ký</button>
            <div class="register-link">
                <p>Đã có tài khoản? <a v-on:click="goToLogin" href="#">Đăng nhập</a></p>
            </div>
        </div>
    </div>
</template>



<script>
import AuthService from '@/services/AuthService';


export default {
    name: 'SignUp',
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                username: "",
                phone: ""
            },
            errorMessage: {
                name: "",
                email: "",
                password: "",
                username: "",
                phone: ""
            }
        }
    },
    methods: {
        async signUp() {
            console.log(this.user);
            if (this.user) {
                try {
                    await AuthService.create(this.user);
                    this.$router.push({ name: 'LoginPage' });
                } catch (error) {
                    if (error.response) {
                        this.errorMessage = error.response.data;
                    } else {
                        this.errorMessage = error.message;
                    }
                }
            }
        },
        isLogin(){
            if (window.localStorage.getItem("jwtToken")) {
                this.$router.push("/");
            }
        },
        goToLogin(){
            this.$router.push("/login");
        }
    },
    mounted() {
        this.isLogin();
    }
}

</script>

<style scoped>
@import url(../../assets/css/register.css);
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Updock&display=swap');
</style>