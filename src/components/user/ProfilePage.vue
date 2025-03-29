<template>
    <HeaderPage></HeaderPage>
    <div class="Info-box">
        <h1>Thông tin người dùng</h1>
        <div style="color: red;" v-if="errorMessage" class="error">{{ errorMessage }}</div>
        <div style="color: green;" v-if="message" class="error">{{ message }}</div>
        <hr>
        <table>
            <tbody>
                <tr>
                    <td>Tên đăng nhập: </td>
                    <td>{{ user.username }}</td>
                </tr>
                <tr>
                    <td>Tên: </td>
                    <td><input class="form-control" v-model="user.name"></td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td><input class="form-control" v-model="user.email"></td>
                </tr>
                <tr>
                    <td>Số điện thoại: </td>
                    <td><input class="form-control" v-model="user.phone"></td>
                </tr>
            </tbody>
        </table>
        <button v-on:click="save" class="BtnSave">Lưu</button>
    </div>
    <FooterPage></FooterPage>

</template>


<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import AuthService from '@/services/AuthService';


export default {
    name: 'ProfilePage',
    components: {
        HeaderPage,
        FooterPage
    },
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                username: "",
                phone: ""
            },
            errorMessage: '',
            message:''
        }
    },
    methods: {

        async loadData() {
            let result = await AuthService.getUserProfile();
            this.user = result.data;
        },
        async save() {
            try {
                await AuthService.editUserProfile(this.user);
                this.loadData();
                this.message = 'Cập nhật thông tin thành công!'
            } catch (error) {
                if (error.response) {
                    this.errorMessage = 'Thông cập nhật không hợp lệ'
                } else {
                    this.errorMessage = error.message;
                }
            }
        }

    },
    mounted() {
        this.loadData();
    }

}

</script>

<style scoped>
@import url(../../assets/css/WebsiteCSS/UserInfo.css);
</style>