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


//alertPopup
function alertPopup(btn) {
    document.querySelectorAll(btn).forEach(item => {
        item.addEventListener("click", () => {
            alert("coming soon");
        });
    });
}

//btnPlay
alertPopup(".btn_play");

//btnDownload
alertPopup(".btn_download");