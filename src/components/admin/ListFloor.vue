<template>
    <div class="grid-body">
        <LeftSideBar></LeftSideBar>
        <div class="right">
            <HeaderAdmin></HeaderAdmin>
            <div class="AminHome">
                <h2>Danh Sách Tầng</h2>
            </div>
            <h3 v-if="!floors" style="color: orangered;text-align: center;" >Chưa có danh sách tầng</h3>
            <div v-else class="AdminTable">
                <table>
                    <thead>
                        <tr>
                            <th>Mã Tầng</th>
                            <th>Tầng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in floors" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
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
import FloorService from '@/services/FloorService';





export default {
    name: 'ListFloor',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            floors: []
        }
    },
    methods: {
        async loadData() {
            const response = await FloorService.getAll();
            this.floors = response.data;
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