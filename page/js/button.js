//button script

//btnCategory active
document.querySelectorAll(".cateSwiper .swiper-slide a").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.remove("active");
        document.querySelectorAll(".cateSwiper .swiper-slide a").forEach(item => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

//btnPlay
const btnPlay = document.querySelectorAll(".btn_play");

btnPlay.forEach(function (btn) {
    btn.addEventListener("click", function () {
        alert("coming soon");
    });
});

//btnDownload 
const btnDownload = document.querySelectorAll(".btn_download");

btnDownload.forEach(function (btn) {
    btn.addEventListener("click", function () {
        alert("coming soon");
    });
});

//btnToggle 
const btnToggle = document.querySelector(".toggle_switch");

btnToggle.addEventListener("click", function () {
    btnToggle.classList.toggle("active");
    document.querySelector("html").classList.toggle("dark");
});