<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div v-if="alertMessage" class="alert" :class="alertType">
                {{ alertMessage }}
                <button class="btn-alert" @click="closeAlert">x</button>
            </div>
            <div class="AminHome">
                <h2>Thu Tiền Phòng</h2>
            </div>
            <div class="container">
                <input id="nameOrder" v-model="order.name" class="form-control" placeholder="Nhập nội dung thu">
                <br>
                <button v-on:click="createOrder" class="btn btn-primary">Tạo hóa đơn.</button>
                <br><br>
                <RouterLink to="/admin">Trở lại trang chủ</RouterLink>
            </div>
            <div style="height: 42%;"></div>
            <FooterAdmin></FooterAdmin>
        </div>
    </div>


</template>



<script>
import LeftSideBar from './LeftSideBar.vue';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';
import OrderRoomService from '@/services/OrderRoomService';






export default {
    name: 'AdminPage',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            order: {
                name: '',
                idRentRoom: ''
            },
            alertMessage: '',
            alertType: ''
        }
    },
    methods: {
        showAlert(message, type) {
            this.alertMessage = message;
            this.alertType = type;
            setTimeout(this.closeAlert, 3000);
        },
        closeAlert() {
            this.alertMessage = '';
            this.alertType = '';
        },
        async createOrder() {
            if (this.checkValidation()==true) {
                this.order.idRentRoom = this.$route.params.id;
                await OrderRoomService.createOrder(this.order);
                this.$router.push('/admin');
            }

        },
        checkValidation(){
            let nameOrder = document.getElementById('nameOrder').value;
            if(!nameOrder){
                this.showAlert('Thông tin không để trống!', 'warning');
                return false;
            }
            else{
                return true;
            }
            
        }


    }


}

</script>

<style scoped>
@import url(../../assets/css/admin.css);
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
    background: #084298;
    color: white;
}

.alert.warning {
    background: orangered;
    color: white;
}

.btn-alert {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #000;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.btn-alert:hover {
    opacity: 1;
}
</style>