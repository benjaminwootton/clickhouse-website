const header = document.getElementById("header");

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
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    let ticking = false;

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Scroll direction detection
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add('scrolling-down');
            header.classList.remove('scrolling-up');
        } else {
            // Scrolling up
            header.classList.remove('scrolling-down');
            header.classList.add('scrolling-up');
        }

        // Scrolled state
        if (scrollTop > 150) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('scrolling-up');
            header.classList.remove('scrolling-down');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
});