<template>
        <HeaderPage></HeaderPage>
        <div style="height: 50px;"></div>
        <div class="RoomDetail">
            <h1 style="text-align: center;">CHI TIẾT PHÒNG</h1>
            <div style="text-align: center; padding-bottom: 50px;">
                <p> <a href="#">Trang chủ</a>
                    <span><a href="#">Phòng trọ</a></span>
                    <span>Chi tiết phòng</span>
                </p>
            </div>
            <div class="row">
                <div class="col-5">
                    <div class="RoomPic">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="5000" v-for="(image, index) in room.image" :key="index" >
                                    <img v-bind:src="`data:image/png;base64,${image}`" alt="img">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-7">
                    <h3>{{ room.name }}</h3>
                        <p style="font-size: clamp(10px,1.6vw,100px);">Loại phòng: <span>{{ room.categoryName }}</span></p>
                        <p style="font-size: clamp(10px,1.6vw,100px);">Tầng số: <span>{{ room.floorName }}</span></p>
                        <p style="font-size: clamp(10px,1.6vw,100px);">Mức giá: <span style="color: red;">{{ this.formatPrice(room.price) }} đ/tháng</span></p>
                        <button v-on:click="confirm" type="button" class="btnThuePhong">Thuê phòng</button>
                </div>
            </div>
        </div>
        <div class="line" style="border: 2px solid black; width: 90%; margin-top: 2%; margin-left: 5%;"></div>
        <div class="row">
            <div class="col-6">
                <h3 style="margin-top: 2%; margin-left: 5%;">Mô tả chi tiết</h3>
                <p><i class="fa-solid fa-location-dot"></i> Địa điểm: {{ room.address }}</p>
            <p>{{ room.description }}</p>
            </div>
            <div class="col-6">
                <div class="DacDiemPhong">
                    <br>
                    <h3>Đặc điểm phòng trọ</h3>
                    <table class="TableRoom">
                        <tbody>
                            <tr>
                            <td><img src="../../assets/img/detail/house.png" alt="Kích cỡ phòng"> Diện tích phòng</td>
                            <td>{{ room.size }} m2</td>
                        </tr>
                        <tr>
                            <td><img src="../../assets/img/detail/double-bed.png" alt="Giường"> Số lượng giường</td>
                            <td>{{ room.quantityBedRoom }} giường</td>
                        </tr>
                        <tr>
                            <td><img src="../../assets/img/detail/sink.png" alt="Phòng tắm"> Số lượng phòng tắm</td>
                            <td>{{ room.quantityBathRoom }} phòng tắm</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <FooterPage></FooterPage>

</template>


<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import RoomService from '../../services/RoomService.js'

export default{
    name:'RoomDetail',
    components:{
        HeaderPage,
        FooterPage
    },
    data(){
        return {
            room:{
                name:'',
                categoryName:'',
                floorName:'',
                price:'',
                size:'',
                description:'',
                address:'',
                quantityBathRoom:'',
                quantityBedRoom:'',
                image:[]
            }
        }
    },
    methods:{
        async loadData(){
            let result = await RoomService.getRoom(this.$route.params.id);
            this.room = result.data;
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        checkUserLogin(){
            let token = localStorage.getItem('jwtToken');
            if(token){
                return true;
            }
            return false;
        },
        confirm(){
            if(this.checkUserLogin()){
                this.$router.push('/confirm-rent/'+this.$route.params.id);
            }
            else{
                this.$router.push({name:'LoginPage'});
            }
        }
    },
    mounted(){
       this.loadData();
    }


}


</script>
<style scoped>
@import url(../../assets/css/WebsiteCSS/DetailsRoom.css);
</style>