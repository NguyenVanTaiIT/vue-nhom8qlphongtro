<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div class="AminHome">
                <h2>Danh Sách Nhà Trọ</h2>
            </div>
            <h3 v-if="!motels" style="color: orangered;text-align: center;" >Chưa có danh sách nhà trọ</h3>
            <div v-else class="AdminTable">
                <table>
                    <thead>
                        <tr>
                            <th>Mã nhà trọ</th>
                            <th>Nhà trọ</th>
                            <th>Địa chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in motels" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.address }}</td>
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
import MotelService from '@/services/MotelService';





export default {
    name: 'ListMotel',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            motels: []
        }
    },
    methods: {
        async loadData() {
            const response = await MotelService.getAllMotel();
            this.motels = response.data;
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