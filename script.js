document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && closeMenu && navLinks) {
        // Clic sur les 3 barres pour OUVRIR
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.add('active');
        });

        // Clic sur la croix (X) pour FERMER
        closeMenu.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    }
});
