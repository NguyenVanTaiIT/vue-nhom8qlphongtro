<template>
    <HeaderPage></HeaderPage>
    <div style="height: 50px;"></div>
    <div class="XacNhan">
        <h1>XÁC NHẬN THÔNG TIN THUÊ PHÒNG</h1>
        <div class="XacNhanBox">
            <h1 style="text-align: center;">Nhà trọ HUYCONY</h1>
            <div class="XacNhanLine"></div>
            <div class="XacNhanDetail">
                <div>
                    <label style="margin-bottom: 10px;"><strong>Thông tin đặt phòng chi tiết:</strong></label>
                    <p>Phòng: <span style="font-weight: bold;">{{ room.name }}</span></p>
                    <p>Giá phòng: <span style="font-weight: bold;">{{ formatPrice(room.price) }}đ / tháng</span></p>
                    <p>Địa chỉ: <span style="font-weight: bold;">{{ room.address }}</span></p>
                    <table class="XacNhanDetailBox">
                        <tbody>
                            <tr>
                                <td>Thuê vào ngày: </td>
                                <td>
                                    <input v-on:change="messageBox" v-model="rentRoom.checkInDate" id="myDate"
                                        type="date" name="ThuePhong">
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng người: </td>
                                <td>
                                    <select v-model="rentRoom.quantityPeople" name="SoLuongNguoi" id="quantityPeople">
                                        <option value="1" selected="selected">1 người</option>
                                        <option value="2">2 người</option>
                                        <option value="3">3 người</option>
                                        <option value="4">4 người</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <img v-bind:src="'data:image/png;base64,' + room.image[0]" alt="Trọ">
                </div>
            </div>
            <div class="user-info">
                <div>
                    <label>Được thuê bởi: </label>
                    <p>Tên: {{ user.name }}</p>
                    <p>Số điện thoại: {{ user.phone }} </p>
                    <p>Email: {{ user.email }}</p>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Loại phòng</th>
                                <td>{{ room.categoryName }}</td>
                            </tr>
                            <tr>
                                <th>Tầng</th>
                                <td>{{ room.floorName }}</td>
                            </tr>
                            <tr>
                                <th>Ngày đặt phòng</th>
                                <td>{{ rentDate }}</td>
                            </tr>
                            <tr>
                                <th>Tiền đặt cọc:</th>
                                <td>{{ formatPrice(room.price) }}đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row" style="width: 80%; height: auto;">
                <div class="col-6">
                    <button v-on:click="pre" class="btnQL"
                        style="background-color: #222736; color: white; border: none; height: 50%; padding: 5px;"> <i
                            class="fa-solid fa-arrow-left"></i> Quay lại </button>
                    <button v-on:click="next" class="btnXN"
                        style="background-color: #222736; color: white; border: none; height: 50%; padding: 5px;"> Xác
                        nhận <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="col-6">
                    <h3 style="text-align: left; color: red;">Lưu ý: </h3>
                    <p style="margin-left: 2%;"> Nếu thông tin của bạn bị sai, bạn vui lòng vào trang <a
                            v-on:click="goToEditProfile" href="#">chỉnh sửa</a> thông tin tài khoản để chỉnh sửa lại
                    </p>
                </div>
            </div>

        </div>
    </div>
    <div id="notification-container">
        <div class="ThongBaoDate">
            <div class="ThongBaoMessage">
                <strong>THÔNG BÁO!</strong>Bạn không được chọn ngày trong quá khứ. <span class="Closebtn">X</span>
            </div>
        </div>
    </div>
    <FooterPage></FooterPage>
</template>

<script>

import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import RoomService from '@/services/RoomService';
import AuthService from '@/services/AuthService';
import RentRoomService from '@/services/RentRoomService';


export default {
    name: 'ConfirmRent',
    components: {
        HeaderPage,
        FooterPage
    },
    data() {
        return {
            user: {
                name: '',
                email: '',
                phone: ''
            },
            room: {
                name: '',
                categoryName: '',
                floorName: '',
                price: '',
                address: '',
                image: []
            },
            rentRoom: {
                checkInDate: '',
                quantityPeople: ''
            },
            rentDate: ''
        }
    },
    methods: {
        messageBox() {
            const inputDate = document.getElementById('myDate');
            const ThongBaoBox = document.querySelector('.ThongBaoDate');
            const today = new Date().toISOString().split('T')[0];
            if (inputDate.value < today) {
                ThongBaoBox.style.display = 'flex';
                this.rentRoom.checkInDate = today;
            }
            else {
                ThongBaoBox.style.display = 'none';
            }
            const closeButton = document.querySelector('.Closebtn');
            closeButton.addEventListener('click', () => {
                const notificationBox = document.querySelector('.ThongBaoDate');

                notificationBox.style.display = 'none';
            });
        },
        async loadInforRoom() {
            let result = await RoomService.getRoom(this.$route.params.id);
            console.log(result.data);
            return result.data;
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        async loadInforUser() {
            let result = await AuthService.getUserInformation();
            console.log(result.data);
            return result.data;
        },

        formatDate(date) {
            const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
            const formattedDate = formatter.format(date);
            return formattedDate;
        },
        pre() {
            this.$router.push('/rooms/' + this.$route.params.id);
        },
        async next() {
            if (this.rentRoom) {
                try {
                    const result = await RentRoomService.rentRoom(this.$route.params.id, this.rentRoom);
                    let rentRoom = result.data;
                    this.$router.push('/rentSuccessful/' + rentRoom.id);
                } catch (error) {
                    if (error.response) {
                        console.log(error.message);
                        this.$router.push('/rentFail/' + this.$route.params.id);
                    }
                }
            }
        },
        goToEditProfile() {
            this.$router.push('/profile');
        }

    },
    async mounted() {
        this.rentDate = this.formatDate(new Date());
        this.room = await this.loadInforRoom();
        this.user = await this.loadInforUser();
        this.rentRoom.quantityPeople = '1';
        this.rentRoom.checkInDate = new Date().toISOString().split('T')[0];
    }
}


</script>

<style scoped>
@import url(../../assets/css/WebsiteCSS/XacNhanP.css);
</style>
