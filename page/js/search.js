//search script
const searchInput = document.querySelectorAll(".search_input");

searchInput.forEach(function (item) {
    item.addEventListener("keypress", function (e) {
        if (e.keyCode == 13) {
            location.href = "search.html";
        }
    });
});