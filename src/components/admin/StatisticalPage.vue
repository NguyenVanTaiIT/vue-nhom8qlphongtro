<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div class="AminHome">
                <h2>Thống Kê</h2>
            </div>
            <div class="container" >
                <div class="statistical">
                    <div class="house">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/statistical/home.png"/>
                        </div>
                        <div style="text-align: end; padding-right: 10px;">
                            <p style="font-size: clamp(10px,1.5vw,100px);">Số lượng nhà</p>
                            <span style="font-size: clamp(10px,3vw,100px);">{{ statistical.quantityMotel }}</span>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/statistical/floor.png"/>
                        </div>
                        <div style="text-align: end; padding-right: 10px;">
                            <p style="font-size: clamp(10px,1.5vw,100px);">Số lượng tầng</p>
                            <span style="font-size: clamp(10px,3vw,100px);">{{ statistical.quantityFloor }}</span>
                        </div>
                    </div>
                    <div class="roomQuanity">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/statistical/room.png"/>
                        </div>
                        <div style="text-align: end; padding-right: 10px;">
                            <p style="font-size: clamp(10px,1.5vw,100px);">Số lượng phòng</p>
                            <span style="font-size: clamp(10px,3vw,100px);">{{ statistical.quantityRoom }}</span>
                        </div>
                    </div>
                    <div class="rent">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/statistical/rent.png"/>
                        </div>
                        <div style="text-align: end; padding-right: 10px;">
                            <p style="font-size: clamp(10px,1.5vw,100px);">Số lượng đã thuê</p>
                            <span style="font-size: clamp(10px,3vw,100px);">{{ statistical.quantityRented }}</span>
                        </div>
                    </div>
                    <div class="rentClock">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/statistical/rentClock.png"/>
                        </div>
                        <div style="text-align: end; padding-right: 10px;">
                            <p style="font-size: clamp(10px,1.5vw,100px);">Số lượng đang thuê</p>
                            <span style="font-size: clamp(10px,3vw,100px);">{{ statistical.quantityRent }}</span>
                        </div>
                    </div>
                    <div class="money">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/statistical/money.png"/>
                        </div>
                        <div style="text-align: end; padding-right: 10px;">
                            <p style="font-size: clamp(10px,1.5vw,100px);">Số tiền đã thu</p>
                            <span style="font-size: clamp(10px,3vw,100px);">{{ formatPrice(statistical.collectMoney) }}đ</span>
                        </div>
                    </div>
            </div>
            <div class="d-flex justify-content-center">
                <a class="backHomebtn" href="/admin" >Về Trang Chủ</a>
        </div>
            </div>
            
        <br>
        <br>
        <FooterAdmin></FooterAdmin>
        </div>
    </div>


</template>



<script>
import LeftSideBar from './LeftSideBar.vue';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';
import StatisticalService from '@/services/StatisticalService'; 
export default {
    name: 'StatisticalPage',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            statistical: {
                quantityRented:'',
                quantityRent:'',
                quantityMotel:'',
                quantityFloor:'',
                quantityRoom:'',
                collectMoney:'',

            }
        }
    },
    methods: {
        
        showTime(){
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const day = date.getDay();
            // const month = date.getMonth();

            const daysOfWeek = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 6"];


            const ampm = hours >= 12 ? 'CH' : 'SA';
            const formattedHours = hours % 12 || 12;

            const formattedTime = `${formattedHours}:${minutes} ${ampm} - ${daysOfWeek[day]}`;

            document.getElementById("clock").textContent = formattedTime;
        },
        async loadData(){
            let result = await StatisticalService.get();
            this.statistical = result.data;
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }




    },
    async mounted() {
        this.loadData();
        setInterval(this.showTime(), 1000);
        
    }
    


}

</script>

<style scoped>
@import url(../../assets/css/admin.css);
@import url(../../assets/css/statistical.css);
</style>