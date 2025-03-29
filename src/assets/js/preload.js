const loader = document.querySelector(".loader");
window.onload = () => {
    setTimeout(function(){
        loader.style.display = "none";
    }, 1000);
};