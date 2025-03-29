<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div class="AminHome">
                <h2>Quản lý phòng</h2>
            </div>
            <div class="AdminTable">
                <h3>Danh sách phòng:</h3>
                <br>
                <RouterLink to="/admin/rooms/add">Thêm phòng</RouterLink>
                <br>
                <table>
                    <thead>
                        <tr>
                            <th>Phòng</th>
                            <th>Nhà trọ</th>
                            <th>Loại phòng</th>
                            <th>Tầng</th>
                            <th>Giá</th>
                            <th>Số phòng tắm</th>
                            <th>Số giường ngủ</th>
                            <th>Hình ảnh</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in rooms" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.motelName }}</td>
                            <td>{{ item.categoryName }}</td>
                            <td>{{ item.floorName }}</td>       
                            <td>{{ formatPrice(item.price) }}đ</td>
                            <td>{{ item.quantityBathRoom }}</td>
                            <td>{{ item.quantityBedRoom }}</td>
                            <td><img style="width: 50px; height: 50px;" v-bind:src="`data:image/png;base64,${item.image[0]}`"></td>
                            <td><a href="#" v-on:click="goToUpdate(item.id)" >Cập nhật</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <FooterAdmin></FooterAdmin>
        </div>
    </div>


</template>



<script>
import LeftSideBar from './LeftSideBar.vue';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';
import RoomService from '@/services/RoomService';





export default {
    name: 'RoomList',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            rooms: []
        }
    },
    methods: {
        async loadData() {
            const response = await RoomService.getAllRoom();
            this.rooms = response.data;
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        goToUpdate(id){
            this.$router.push('/admin/rooms/update/'+id);
        }

    },
    async mounted() {
        await this.loadData();
    }



}

</script>

<style scoped>
@import url(../../assets/css/admin.css);
</style>