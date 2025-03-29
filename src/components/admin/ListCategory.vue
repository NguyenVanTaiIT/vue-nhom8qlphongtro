<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div class="AminHome">
                <h2>Danh Sách Loại Phòng</h2>
            </div>
            <h3 v-if="!categories" style="color: orangered;text-align: center;" >Chưa có danh sách loại phòng</h3>
            <div v-else class="AdminTable">
                <table>
                    <thead>
                        <tr>
                            <th>Mã loại</th>
                            <th>Loại</th>
                            <th>Giá Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in categories" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ formatPrice(item.price) }}đ</td>
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
import CategoryService from '@/services/CategoryService';





export default {
    name: 'ListCategory',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            categories: []
        }
    },
    methods: {
        async loadData() {
            const response = await CategoryService.getAll();
            this.categories = response.data;
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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