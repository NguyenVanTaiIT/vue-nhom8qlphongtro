<template>
    <HeaderPage></HeaderPage>
    <div style="height: 150px;"></div>
    <div class="body-contact">
        <div class="container-contact">
        <h1>Liên Hệ Nhà Trọ HUYCONY</h1>
        <div class="contact-info">
            <div>
                <span>Địa chỉ:</span> 123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh
            </div>
            <div>
                <span>Số điện thoại :</span> <a href="#">+84 123 456 789</a>
            </div>
            <div>
                <span>Email:</span> <a href="#">hutech@gmail.com</a>
            </div>
        </div>
        <div class="map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6341493662596!2d106.69010541526048!3d10.762622992333503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ebb1e250ec5%3A0x4c5e1c4cbd70256a!2zQ8O0bmcgdmlhIFBoxrDhu51uZyBUUC5Iw7JhIEPDtG5nIE5naGnDqm4!5e0!3m2!1sen!2s!4v1688470829072!5m2!1sen!2s" 
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
    </div>
    <FooterPage></FooterPage>
  
</template>


<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';


export default{
    name:'ContactPage',
    components:{
        HeaderPage,
        FooterPage
    }

}

</script>

<style scoped>
@import url(../../assets/css/WebsiteCSS/Contact.css);
</style>