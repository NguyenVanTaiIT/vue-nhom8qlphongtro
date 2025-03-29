<template>
    <div class="AdminHeader">
        <div class="d-flex align-items-center" style="border: 1px solid white; padding: 5px; border-radius: 5px;margin-left: 10px;">
            <i style="font-size: larger; transform: translateY(-2px);" class="fa-regular fa-clock"></i>
            <span style="margin-left: 10px;" id="clock"></span>
        </div>
        <p style="transform: translateX(300px);">Chào mừng quản lý</p>
        <img src="../../assets/img/AdminHeader.png" />
    </div>
</template>

<script>
export default {
    name: 'HeaderAdmin',
    methods: {
        showTime() {
            const date = new Date();
            const day = date.getDay();
            const month = date.getMonth() + 1;
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const dayOfMonth = date.getDate();
            const dayOfWeek = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
            const year = date.getFullYear();

            const ampm = hours >= 12 ? 'CH' : 'SA';
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

            const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm} - ${dayOfWeek[day]}, ${dayOfMonth}/${month}/${year}`;

            const clockElement = document.getElementById("clock");
            if (clockElement) {
                clockElement.textContent = formattedTime;
            }
        }
    },
    mounted() {
        this.showTime(); 
        setInterval(this.showTime, 1000); 
    }
}
</script>

<style>


.AdminHeader{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1856b3;
    color: white;
    height: fit-content;
}
.AdminHeader p{
    margin: 0;
    font-size: clamp(10px,1.5vw,150px);
}

.AdminHeader img{
    width: 4%;
    margin: 10px;
    box-shadow: 0 0 8px white;
    border-radius: 50%;
}
</style>