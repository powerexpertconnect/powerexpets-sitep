document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && closeMenu && navLinks) {
        // Ouvrir le menu au clic sur les 3 barres
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.add('active');
        });

        // Fermer le menu au clic sur la croix (X)
        closeMenu.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    }
});
