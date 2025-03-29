document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.left a');

    // Lấy trạng thái từ localStorage
    const activeLinkId = localStorage.getItem('activeLink');

    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add('clicked');
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Xóa class clicked khỏi tất cả các liên kết
            links.forEach(l => l.classList.remove('clicked'));

            // Thêm class clicked cho liên kết đã nhấp
            link.classList.add('clicked');

            // Lưu trạng thái vào localStorage
            localStorage.setItem('activeLink', link.id);
        });
    });
});
