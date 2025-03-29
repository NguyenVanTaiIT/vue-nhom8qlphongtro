<template>
    <HeaderPage></HeaderPage>
    <div class="ConfirmTB">
        <h1 style="text-align: center;">Xác nhận thông tin thất bại</h1><br/>
        <i class="fa-regular fa-circle-xmark" style="color: #ff0000;"></i>
        <h1 style="text-align: center; margin-top: 5%;">Vui lòng kiểm tra lại thông tin quý khách</h1>
        <button v-on:click="goBack" ><i class="fa-solid fa-arrow-left"></i> Quay lại</button>   
    </div>
    <FooterPage></FooterPage>
</template>


<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';


    export default{
        name:'RentFail',
        components: {
            HeaderPage,
            FooterPage
        },
        methods:{
            goBack(){
                this.$router.push('/confirm-rent/'+this.$route.params.id);
            }
        }
    }


</script>


<style scoped>
@import url(../../assets/css/WebsiteCSS/XNTB.css);
</style>