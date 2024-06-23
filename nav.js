document.getElementById('logo').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.maxHeight === "0px" || navbar.style.maxHeight === "") {
        navbar.style.display = "block";
        navbar.style.maxHeight = navbar.scrollHeight + "px";
    } else {
        navbar.style.maxHeight = "0px";
        setTimeout(function() {
            navbar.style.display = "none";
        }, 500); // Matches the duration of the CSS transition
    }
});
