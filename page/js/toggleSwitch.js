//toggleSwitch script 
const btnToggle = document.querySelector(".toggle_switch");

btnToggle.addEventListener("click", function () {
    btnToggle.classList.toggle("active");
    document.querySelector("html").classList.toggle("dark");
});