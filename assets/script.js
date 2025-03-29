function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) { 
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}


window.addEventListener('scroll', function () {
    const profileSection = document.getElementById('profile');
    const rect = profileSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        profileSection.style.animation = 'fadeInUp 1s ease-in-out forwards';
    }
});

