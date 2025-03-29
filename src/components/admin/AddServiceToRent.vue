<template>
    <div class="service-body">
        <LeftSideBar></LeftSideBar>
        <div class="background-service">
            <HeaderAdmin></HeaderAdmin>
            <div class="service">
                <div v-if="alertMessage" class="alert" :class="alertType">
                    {{ alertMessage }}
                    <button class="btn-alert" @click="closeAlert">x</button>
                </div>
                <h3 style="text-align: center;">Thêm Dịch Vụ {{ nameService }} Vào Phòng {{ nameRoom }}</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <input id="quantity" min="1" type="number" v-model="otherService.quantity"
                                class="form-control" placeholder="Nhập Số lượng">
                            <br>
                            <button v-on:click="add" class="btn btn-primary">Thêm</button>
                            <br><br>
                            <a href="#" v-on:click="goBack">Trở về trước đó</a>
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
            <div style="height: 33%"></div>
            <FooterAdmin></FooterAdmin>
        </div>
    </div>
</template>

<script>
import RentRoomService from '@/services/RentRoomService';
import LeftSideBar from './LeftSideBar.vue';
import ServiceRoomService from '@/services/ServiceRoomService';
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
    data() {
        return {
            nameService: '',
            nameRoom: '',
            otherService: {
                quantity: '',
                status: '',
                serviceName: '',
                rentRoomId: ''
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

        async loadData() {
            let result = await RentRoomService.getRentRoom(this.$route.params.id);
            this.nameRoom = result.data.roomName;
            let result1 = await ServiceRoomService.getById(this.$route.params.idn);
            this.nameService = result1.data.name;
        },
        async add() {
            if (this.checkValidation() == true) {
                this.otherService.rentRoomId = this.$route.params.id;
                this.otherService.serviceName = this.nameService;
                await OtherServiceService.create(this.otherService);
                this.$router.push(`/admin/manageRent/${this.$route.params.id}`);
            }
        },
        goBack() {
            this.$router.push('/admin/manageRent/services/' + this.$route.params.id);
        },
        checkValidation() {
            let quantity = document.getElementById('quantity').value;
            if (!quantity) {
                this.showAlert('Thông tin không để trống!', 'warning');
                return false;
            }
            else if (quantity < 0) {
                this.showAlert('Không nhập số âm!', 'warning');
                return false;
            }
            else {
                return true;
            }
        }

    },
    async mounted() {
        await this.loadData();
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