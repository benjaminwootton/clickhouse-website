const header = document.getElementById("header");
const body = document.body;

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        header.classList.toggle('header-open');
    });
});

// Header scroll logic
window.onscroll = function (e) {
    if (this.oldScroll < this.scrollY) {
        header.classList.add('scrolling-down');
    } else {
        header.classList.remove('scrolling-down');
    }

    if (this.scrollY > 75) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    this.oldScroll = this.scrollY;
}