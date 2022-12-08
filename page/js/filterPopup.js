//filterPopup script
const filterPopupOpen = document.querySelector(".btn_filter_open");
const filterPopupClose = document.querySelector(".filter_popup .btn_popup_close");
const filterPopup = document.querySelector(".filter_popup");
const filterPopupFrame = document.querySelector(".filter_popup .popup_frame");

//filterPopup Open
filterPopupOpen.addEventListener("click", function () {
    filterPopup.classList.add("on");
    filterPopupFrame.classList.add("on");
    filterPopup.classList.remove("off");
    filterPopupFrame.classList.remove("off");
    document.body.style.overflow = "hidden";
});

//filterPopup Close
filterPopupClose.addEventListener("click", function () {
    filterPopup.classList.remove("on");
    filterPopupFrame.classList.remove("on");
    filterPopup.classList.add("off");
    filterPopupFrame.classList.add("off");
    document.body.style.overflow = "visible";
});

//buttonActive
function buttonActive(btn) {
    document.querySelectorAll(btn).forEach(item => {
        item.addEventListener("click", () => {
            item.classList.remove("active");
            document.querySelectorAll(btn).forEach(item => {
                item.classList.remove("active");
            });
            item.classList.add("active");
        });
    });
}

//btnFilter 
buttonActive(".btn_filter");

//btnType 
buttonActive(".btn_type");

//btnRating 
buttonActive(".btn_rating");