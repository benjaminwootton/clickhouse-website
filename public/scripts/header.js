(function() {
    const header = document.getElementById("header");
    const menuButton = document.getElementById("menu-button");
    const body = document.body;
    let oldScroll = 0;

    // Menu toggle logic
    function toggleMenu() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === "true";
        
        menuButton.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        body.classList.toggle('popup-active', !isExpanded);
        
        requestAnimationFrame(() => {
            header.classList.toggle('header-open', !isExpanded);
        });
    }

    // Scroll behaviour logic
    function handleScroll() {
        const currentScroll = window.scrollY;

        // Toggle scrolling-down class based on scroll direction
        header.classList.toggle('scrolling-down', currentScroll > oldScroll);

        // Toggle scrolled classes based on scroll position
        const isScrolled = currentScroll > 150;
        header.classList.toggle('scrolled', isScrolled);
        body.classList.toggle('scrolled', isScrolled);

        // Update oldScroll for next comparison
        oldScroll = currentScroll;
    }

    // Close the menu when anchor links are clicked
    function closeMenuOnAnchorClick(event) {
        const isExpanded = menuButton.getAttribute('aria-expanded') === "true";
        if (isExpanded) {
            toggleMenu();  // Close the menu
        }
    }

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    // Add event listeners to all anchor links in the header
    const anchorLinks = header.querySelectorAll('a');
    anchorLinks.forEach(link => {
        link.addEventListener('click', closeMenuOnAnchorClick);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
})();
