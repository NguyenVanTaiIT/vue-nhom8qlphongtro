<template>
    <div class="service-body">
        <LeftSideBar></LeftSideBar>
        <div class="background-service">
            <HeaderAdmin></HeaderAdmin>
            <div class="service">
                <h3 style="text-align: center;">Thêm Phòng</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <div style="color: red;" v-if="message" class="alert alert-light" role="alert">
                                <ul>
                                    <li v-for="(ms, i) in message.split('\n')" :key="i">
                                        {{ ms }}
                                    </li>
                                </ul>
                            </div>
                            <input id="name" v-model="room.name" class="form-control" placeholder="Nhập tên phòng">
                            <br>
                            <p>Nhà trọ: </p>
                            <v-select v-model="motel" :options="motels" label="name"></v-select>
                            <br>
                            <p>Tầng: </p>
                            <v-select v-model="floor" :options="floors" label="name"></v-select>
                            <br>
                            <p>Loại phòng: </p>
                            <v-select v-model="category" :options="categories" label="name"></v-select>
                            <br>
                            <p>Tải hình ảnh lên từ máy:</p>
                            <input type="file" multiple @change="handleFileUpload" />
                            <br><br>
                            <div v-if="images.length">
                                <p>Xem trước:</p>
                                <div class="row" >
                                    <div class="col-4"  v-for="(image, index) in images" :key="index">
                                        <img :src="image.url" :alt="'Image ' + (index + 1)" width="100" />
                                    </div>
                                </div>
                            </div>
                            <br><br>
                            <button class="btn btn-primary" @click="submitFiles">Thêm Phòng</button>
                            <br><br>
                            <a href="#" v-on:click="goBack">Trở về trước đó</a>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
            </div>
            <div style="height: 33%"></div>
            <FooterAdmin></FooterAdmin>
        </div>
    </div>
</template>

<script>
import LeftSideBar from './LeftSideBar.vue';
import HeaderAdmin from './HeaderAdmin.vue';
import FooterAdmin from './FooterAdmin.vue';
import FloorService from '@/services/FloorService';
import MotelService from '@/services/MotelService';
import CategoryService from '@/services/CategoryService';
import RoomService from '@/services/RoomService';




export default {
    name: 'AddServiceToRent',
    components: {
        LeftSideBar,
        HeaderAdmin,
        FooterAdmin
    },
    data() {
        return {
            room: {
                name: '',
                motelName: '',
                floorName: '',
                categoryName: ''
            },
            floors: [{
                name: ''
            }],
            motels: [{
                name: ''
            }],
            categories: [{
                name: ''
            }],
            motel: '',
            floor: '',
            category: '',
            images: [],
            message: "",
        }
    },
    methods: {


        async loadData() {
            let result = await FloorService.getAll();
            this.floors = result.data;
            let result1 = await MotelService.getAllMotel();
            this.motels = result1.data;
            let result2 = await CategoryService.getAll();
            this.categories = result2.data;

        },
        checkValidation() {
            if (!this.motel || !this.category || !this.floor || !this.room.name||!this.images.length) {
                this.message = "Vui lòng không để trống thông tin!";
                return false;
            }
            else if(this.room.name.length<1||this.room.name.length>200){
                this.message = "Vui lòng nhập tên phòng từ 1 đến 200 ký tự!";
                return false;
            }


            return true;
        },
        goBack() {
            this.$router.push('/admin/rooms');
        },
        handleFileUpload(event) {
            const files = event.target.files;
            this.images = [];
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.images.push({ file: files[i], url: e.target.result });
                };
                reader.readAsDataURL(files[i]);
            }
        },
        async submitFiles() {
            if (this.checkValidation()) {
                const formData = new FormData();
                this.images.forEach((image) => {
                    formData.append('files', image.file);
                });
                this.room.motelName = this.motel.name;
                this.room.floorName = this.floor.name;
                this.room.categoryName = this.category.name;
                formData.append('name', this.room.name);
                formData.append('motelName', this.room.motelName);
                formData.append('categoryName', this.room.categoryName);
                formData.append('floorName', this.room.floorName);
                try {
                    await RoomService.addNewRoom(formData);
                    this.$router.push('/admin/rooms');
                } catch (error) {
                    this.message = error.message;
                }
                
            }

        },
        

    },

    async mounted() {
        await this.loadData();

    }
}



</script>



<style scoped>
@import url(../../assets/css/service.css);
img {
  margin: 10px;
}
</style>