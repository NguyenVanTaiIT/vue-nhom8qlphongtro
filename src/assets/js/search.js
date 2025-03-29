const BtnTim = document.querySelector('.fa-magnifying-glass');
const searchBox = document.querySelector('.search-box');

BtnTim.addEventListener('click', () => {
    searchBox.classList.toggle('search-box-active');
});
