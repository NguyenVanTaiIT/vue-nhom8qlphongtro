<template>
    <HeaderPage></HeaderPage>
    <div class="main-rooms">
        <h1 style="text-align: center; margin-top: 5%;">Kết quả tìm kiếm của: {{ search }}</h1>
        <div style="text-align: center;">
            <a class="link-home" href="/">Trang chủ</a>
            <span>Kết quả tìm kiếm</span>
        </div>
        <div style="height: 50px;" ></div>
        <h2 v-if="!rooms" style="color: green; text-align: center;" >Không tìm thấy kết quả!</h2>
        <div v-else class="rooms">
            <div v-for="item in rooms" :key="item.id" class="room-card">
                <img v-bind:src="`data:image/png;base64,${item.image[0]}`">
                <div class="room-details">
                    <h3>{{item.name}}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Giá phòng</td>
                                <td>{{formatPrice(item.price)}}đ</td>
                            </tr>
                            <tr>
                                <td>Loại phòng:</td>
                                <td>{{ item.categoryName }}</td>
                            </tr>
                            <tr>
                                <td>Tầng số:</td>
                                <td>{{ item.floorName }}</td>
                            </tr>
                            <tr>
                                <td>Diện tích:</td>
                                <td>{{ item.size }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link :to="'rooms/'+item.id" >Chi tiết phòng</router-link>
                </div>
            </div>
        </div>
        <div class="page">

        </div>
    </div>
    <FooterPage></FooterPage>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import RoomService from '../../services/RoomService.js'

export default{
    name:'SearchPage',
    components:{
        HeaderPage,
        FooterPage
    },
    data(){
        return {
            rooms:[],
            search:''
        }
    },
    methods:{
        async loadData(){
            let result = await RoomService.searchRoom(this.$route.query.key);
            this.rooms = result.data;
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    },
    mounted(){
       this.search = this.$route.query.key;
       this.loadData();
    }


}

</script>

<style scoped>
@import url(../../assets/css/WebsiteCSS/Rooms.css);
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
</style>