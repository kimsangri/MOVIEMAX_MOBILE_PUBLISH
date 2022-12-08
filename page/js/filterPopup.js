//filterPopup script
const btnFilterOpen = document.querySelector(".btn_filter_open");
const btnPopClose = document.querySelector(".filter_popup .btn_popup_close");
const filterPopup = document.querySelector(".filter_popup");
const filterPopupFrame = document.querySelector(".filter_popup .popup_frame");

btnFilterOpen.addEventListener("click", function () {
    filterPopup.classList.add("on");
    filterPopupFrame.classList.add("on");
    filterPopup.classList.remove("off");
    filterPopupFrame.classList.remove("off");
    document.body.style.overflow = "hidden";
});

btnPopClose.addEventListener("click", function () {
    filterPopup.classList.remove("on");
    filterPopupFrame.classList.remove("on");
    filterPopup.classList.add("off");
    filterPopupFrame.classList.add("off");
    document.body.style.overflow = "visible";
});

//btnFilter active
document.querySelectorAll(".btn_filter").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.remove("active");
        document.querySelectorAll(".btn_filter").forEach(item => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

//btnType active
document.querySelectorAll(".btn_type").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.remove("active");
        document.querySelectorAll(".btn_type").forEach(item => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

//btnRating active
document.querySelectorAll(".btn_rating").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.remove("active");
        document.querySelectorAll(".btn_rating").forEach(item => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});