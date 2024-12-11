document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.href;
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});