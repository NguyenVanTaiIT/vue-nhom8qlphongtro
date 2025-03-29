<template>
    <HeaderPage></HeaderPage>
    <div style="height: 150px;"></div>
    <div class="body-aboutUs">
        <h1 style="text-align: center;" >Chào mừng đến với Nhà Trọ HUYCONY</h1>
        <div class="container">
        <h2>Về Chúng Tôi</h2>
        <p>Nhà Trọ HUYCONY là nơi cung cấp không gian sống thoải mái và tiện nghi cho các bạn trẻ, gia đình và người đi làm. Với sứ mệnh mang lại một mái nhà an lành và đáng tin cậy, chúng tôi tự hào là lựa chọn hàng đầu của nhiều người trong hành trình tìm kiếm nơi ở lý tưởng.</p>
        
        <h2>Tại Sao Chọn Chúng Tôi?</h2>
        <p>Chúng tôi luôn nỗ lực cung cấp: </p>
            <ul>
                <li>Không gian sạch sẽ, thoáng mát.</li>
                <li>An ninh đảm bảo với hệ thống camera và bảo vệ 24/7.</li>
                <li>Giá cả hợp lý phù hợp với mọi đối tượng.</li>
                <li>Hỗ trợ tận tình từ đội ngũ nhân viên chuyên nghiệp.</li>
            </ul>
        <h2>Đội Ngũ Của Chúng Tôi</h2>
        <div class="team">
            <div class="member">
                <img src="../../assets/img/aboutUs/about-us1.jpg" alt="Team Member">
                <h3>Nguyễn Văn Tài</h3>
                <p>Quản lý</p>
            </div>
            <div class="member">
                <img src="../../assets/img/aboutUs/about-us2.jpg" alt="Team Member">
                <h3>Bùi Quốc Huy</h3>
                <p>Chăm sóc khách hàng</p>
            </div>
            <div class="member">
                <img src="../../assets/img/aboutUs/about-us3.jpg" alt="Team Member">
                <h3>Hoàng Nguyễn Chí Anh</h3>
                <p>Bảo vệ</p>
            </div>
        </div>
    </div>
    </div>
    <FooterPage></FooterPage>
  
</template>


<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';


export default{
    name:'AboutUsPage',
    components:{
        HeaderPage,
        FooterPage
    }

}

</script>

<style scoped>
@import url(../../assets/css/WebsiteCSS/AboutUs.css);
</style>