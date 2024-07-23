document.addEventListener("DOMContentLoaded", function() {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Scroll smoothly
            });
        });
    });

    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});
