const inputDate = document.getElementById('myDate');
const ThongBaoBox = document.querySelector('.ThongBaoDate');

inputDate.addEventListener('change', () => {
    const today = new Date().toISOString().split('T')[0];
    if (inputDate.value < today) {
        ThongBaoBox.style.display = 'flex';
        inputDate.value = today;
    }
    else {
        ThongBaoBox.style.display = 'none';
    }
});

const closeButton = document.querySelector('.Closebtn');

closeButton.addEventListener('click', () => {
    const notificationBox = document.querySelector('.ThongBaoDate');

    notificationBox.style.display = 'none';
});


