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
        const isScrolled = currentScroll > 50;
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

    // Normalize hash to remove leading slashes or hashes
    function normalizeHash(hash) {
        return hash.replace(/^[/#]+/, '');
    }

    // Check for anchor in URL and add scrolled class if present
    function checkUrlAnchor() {
        const currentHash = normalizeHash(window.location.hash);
        const hasAnchor = currentHash.length > 0;
        
        // Add scrolled classes
        header.classList.toggle('scrolled', hasAnchor);
        body.classList.toggle('scrolled', hasAnchor);

        // Find and highlight the matching anchor link
        const anchorLinks = header.querySelectorAll('a[href*="#"]');
        anchorLinks.forEach(link => {
            // Normalize the link's href
            const linkHash = normalizeHash(link.getAttribute('href'));
            
            // Compare normalized hashes
            link.classList.toggle('font-bold', linkHash === currentHash);
        });
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

    // Check anchor on initial page load
    checkUrlAnchor();

    // Also check anchor when hash changes
    window.addEventListener('hashchange', checkUrlAnchor);
})();