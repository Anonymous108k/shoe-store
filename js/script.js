document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("#navbar-placeholder");
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => navbar.innerHTML = data);
});