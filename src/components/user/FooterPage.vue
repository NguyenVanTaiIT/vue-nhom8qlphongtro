<template>
        <footer>
            <div class="footer-box">
                <div class="footer-media" style="width: 35%;">
                    <h1>HUYCONY</h1>
                    <p>Chúng tôi truyền cảm hứng cho hơn triệu người tham quan thông qua nhiều kênh truyền thông</p>
                    <div class="icon">
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="contact">
                    <h2>Liên hệ với chúng tôi</h2>
                    <br>
                    <p>09123456789</p>
                    <p>nguyenvantai@gmail.com</p>
                    <p>10/80c Song Hành Xa Lộ Hà Nội, Phường Tân Phú, Quận 9, Hồ Chí Minh
                        Việt Nam</p>
                </div>

                <div class="update">
                    <h3>Thông tin mới nhất</h3>
                    <p>Lấy thông tin và cập nhật mới nhất. </p>
                    <input type="text">
                    <iframe title="HUTECH University Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.661314245923!2d106.6999395147636!3d10.830034492306334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e12d1975d3b%3A0xd10c5163f78274c2!2sHUTECH%20University!5e0!3m2!1sen!2s!4v1631588849685!5m2!1sen!2s"
                        padding-top="10" style="width: 90%; height: 80%; padding-top: 5%;" allowFullScreen
                        loading="lazy"></iframe>
                </div>
            </div>
        </footer>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
export default{
    name: 'FooterPage'
}

</script>

<style scoped >
@import url(../../assets/css/WebsiteCSS/footer.css);
</style>