//search script
const searchInput = document.getElementById("search");

searchInput.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        location.href = "search.html";
    }
});

