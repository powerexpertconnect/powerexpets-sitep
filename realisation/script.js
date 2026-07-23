document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');
    const menuOverlay = document.getElementById('menu-overlay');

    if (mobileMenu && closeMenu && navLinks && menuOverlay) {
        // Ouvrir le menu
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.add('active');
            menuOverlay.classList.add('active');
        });

        // Fermer le menu
        const hideMenu = () => {
            navLinks.classList.remove('active');
            menuOverlay.classList.remove('active');
        };

        closeMenu.addEventListener('click', hideMenu);
        menuOverlay.addEventListener('click', hideMenu);
    }
});
