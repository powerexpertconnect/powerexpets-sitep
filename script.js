document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelector('.nav-links');
    const menuOverlay = document.querySelector('.menu-overlay');

    // Fonction pour ouvrir/fermer le menu coulissant
    function toggleMenu() {
        if (navLinks) navLinks.classList.toggle('active');
        if (menuOverlay) menuOverlay.classList.toggle('active');
    }

    // Écouteur sur le bouton Burger (3 barres)
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Écouteur sur la croix (X) pour fermer
    if (closeMenu) {
        closeMenu.addEventListener('click', toggleMenu);
    }
    
    // Écouteur sur le voile gris en arrière-plan pour fermer
    if (menuOverlay) {
        menuOverlay.addEventListener('click', toggleMenu);
    }

    // Animation / Event Tracking simulator (conservé de votre ancien code)
    const ctaButtons = document.querySelectorAll('.badge-google, .header-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Redirection vers Google Play Store initiée.');
        });
    });
});
