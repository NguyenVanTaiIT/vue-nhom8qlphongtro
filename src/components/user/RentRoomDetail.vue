<template>
    <HeaderPage></HeaderPage>
    <div style="height: 150px;"></div>
    <h1 style="text-align: center; margin-top: 5%;">Chi Tiết Hóa Đơn Thuê Phòng</h1>
    <div style="text-align: center;">
        <a class="link-home" href="/">Trang chủ</a>
        <span>Chi Tiết Hóa Đơn Thuê Phòng</span>
    </div>
    <br>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <div class="card">
                <div class="card-body mx-4">
                    <div class="container">
                        <p class="my-5 mx-5" style="font-size: 30px;">Cảm ơn bạn đã thuê phòng</p>
                        <div class="row">
                            <ul class="list-unstyled">
                                <li class="text-black">{{ rentRoom.userName }}</li>
                                <li class="text-black">Phòng: {{ rentRoom.roomName }}</li>
                                <li class="text-muted mt-1"><span class="text-black">Hóa Đơn</span> #{{ rentRoom.id }}</li>
                                <li class="text-black mt-1">Ngày tạo: {{ format_date(rentRoom.creationDate) }}</li>
                            </ul>
                            <hr>
                            <div class="col-xl-10">
                                <p>Tiền Đặt cọc:</p>
                            </div>
                            <div class="col-xl-2">
                                <p class="float-end">{{ formatPrice(rentRoom.depositPrice) }}đ
                                </p>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-xl-10">
                                <p>Số lượng thành viên:</p>
                            </div>
                            <div class="col-xl-2">
                                <p class="float-end">{{ rentRoom.quantityPeople }}
                                </p>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-xl-8">
                                <p>Ngày Thuê:</p>
                            </div>
                            <div class="col-xl-4">
                                <p class="float-end">{{ format_date(rentRoom.checkInDate) }}
                                </p>
                            </div>
                            <hr style="border: 2px solid black;">
                        </div>
                        <div v-if="rentRoom.checkOutDate" class="row">
                            <div class="col-xl-8">
                                <p>Ngày Trả Phòng:</p>
                            </div>
                            <div class="col-xl-4">
                                <p class="float-end">{{ format_date(rentRoom.checkOutDate) }}
                                </p>
                            </div>
                            <hr style="border: 2px solid black;">
                        </div>
                        <div class="row text-black">
                            <div class="col-xl-12">
                                <p class="float-end fw-bold">Trạng thái: {{ rentRoom.status }}
                                </p>
                            </div>
                            <hr style="border: 2px solid black;">
                        </div>
                        <div class="text-center" style="margin-top: 90px;">
                            <a><u class="text-info">NHÀ TRỌ HUYCONY</u></a>
                            <p>Hân hạnh được đồng hành cùng bạn. </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div class="col-3"></div>
    </div>
    <FooterPage></FooterPage>
</template>


<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import RentRoomService from '@/services/RentRoomService';
import moment from 'moment';

export default {
    name: 'RentRoomDetail',
    components: {
        HeaderPage,
        FooterPage
    },
    data() {
        return {
            rentRoom:{
                id:'',
                status:'',
                checkInDate:'',
                checkOutDate:'',
                depositPrice:'',
                quantityPeople:'',
                creationDate:'',
                roomName:'',
                userName:''
            }
        }
    },
    methods: {
        async loadData() {
            let response = await RentRoomService.getRentRoom(this.$route.params.id);
            this.rentRoom = response.data;
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY');
            }
        }
    },
    mounted() {
        this.loadData();
    }


}

</script>
