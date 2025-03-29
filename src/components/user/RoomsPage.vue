<template>
    <HeaderPage></HeaderPage>
    <div class="main-rooms">
        <h1 style="text-align: center; margin-top: 5%;">Phòng của chúng tôi</h1>
        <div style="text-align: center;">
            <a class="link-home" href="/">Trang chủ</a>
            <span>Phòng của chúng tôi</span>
        </div>
        <h2 v-if="!rooms" style="color: green; text-align: center;">Hiện tại chưa có phòng trống!</h2>
        <div v-else class="rooms">
            <div v-for="item in rooms" :key="item.id" class="room-card">
                <img v-bind:src="`data:image/png;base64,${item.image[0]}`">
                <div class="room-details">
                    <h3>{{ item.name }}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Giá phòng</td>
                                <td>{{ formatPrice(item.price) }}đ</td>
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
                    <router-link :to="'rooms/' + item.id">Chi tiết phòng</router-link>
                </div>
            </div>
        </div>
        <br><br>
        <div class="page">
            <div class="row">
                <div class="col-5"></div>
                <div class="col-2">
                    <div v-if="rooms" class="pagination">
                        <a v-if="page.currentPage != 1" v-on:click="handlePageNumber(page.currentPage - 1)"
                            href="#">&laquo;</a>
                        <a v-on:click="handlePageNumber(i)" :id="'page' + i" v-for="i in page.quantityPage" :key="i"
                            href="#">{{ i }}</a>
                        <a v-if="page.currentPage != page.quantityPage"
                            v-on:click="handlePageNumber(page.currentPage + 1)" href="#">&raquo;</a>
                    </div>
                </div>
                <div class="col-5"></div>
            </div>
        </div>
    </div>
    <FooterPage></FooterPage>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import RoomService from '../../services/RoomService.js'

export default {
    name: 'RoomsPage',
    components: {
        HeaderPage,
        FooterPage
    },
    data() {
        return {
            rooms: [],
            page: {
                size: '',
                quantityPage: '',
                currentPage: ''
            }
        }
    },
    methods: {

        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        async loadPageNumber() {
            this.page.currentPage = 1;
            this.page.size = 3;
            let pageResponse = await RoomService.getPageNumber(this.page.size, this.page.currentPage);
            this.page.quantityPage = pageResponse.data.quantityPage;
        },
        async handlePageNumber(currentPage) {
            let result = await RoomService.getAllRoomWithPagination(currentPage - 1, this.page.size);
            this.rooms = result.data;
            this.removeActivePage(this.page.currentPage);
            this.page.currentPage = currentPage;
            this.setActivePage(currentPage);
        },
        setActivePage(number) {
                let pageSelected = document.getElementById('page' + number);
                if(pageSelected){
                    pageSelected.classList.add('active');
                }
        },
        removeActivePage(number) {
                let pageSelected = document.getElementById('page' + number);
                if(pageSelected){
                    pageSelected.classList.remove('active');
                }
        }

    },
    async mounted() {
        await this.loadPageNumber();
        await this.handlePageNumber(1);
        this.setActivePage(1);
    }


}

</script>

<style scoped>
@import url(../../assets/css/WebsiteCSS/Rooms.css);
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
</style>