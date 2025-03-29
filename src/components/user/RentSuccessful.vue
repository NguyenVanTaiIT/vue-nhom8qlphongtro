<template>
    <HeaderPage></HeaderPage>
    <div class="ConfirmTC">
        <h1 style="text-align: center;">Đã xác nhận thông tin thành công</h1><br />
        <i class="fa-regular fa-clock"></i>
        <h1 style="text-align: center; margin-top: 5%;">Trạng thái: {{ status }}</h1>
    </div>
    <FooterPage></FooterPage>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import RentRoomService from '@/services/RentRoomService';


export default {
    name: 'RentSuccessful',
    components: {
        HeaderPage,
        FooterPage
    },
    data() {
        return {
           status:''
        }
    },
    methods: {
        async loadData() {
            let result = await RentRoomService.getRentRoom(this.$route.params.id);
            return result.data.status;
        },
    },
    async mounted() {
        this.status = await this.loadData();
    }

}


</script>

<style scoped >
@import url('../../assets/css/WebsiteCSS/XNTC.css');
</style>