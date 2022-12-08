//changePicPopup script
const changePicPopupOpen = document.querySelector(".profile_box");
const btnPopClose = document.querySelector(".change_pic_popup .btn_popup_close");
const changePicPopup = document.querySelector(".change_pic_popup");
const changePicPopupFrame = document.querySelector(".change_pic_popup .popup_frame");

changePicPopupOpen.addEventListener("click", function () {
    changePicPopup.classList.add("on");
    changePicPopupFrame.classList.add("on");
    changePicPopup.classList.remove("off");
    changePicPopupFrame.classList.remove("off");
    document.body.style.overflow = "hidden";
})

btnPopClose.addEventListener("click", function () {
    changePicPopup.classList.remove("on");
    changePicPopupFrame.classList.remove("on");
    changePicPopup.classList.add("off");
    changePicPopupFrame.classList.add("off");
    document.body.style.overflow = "visible";
})