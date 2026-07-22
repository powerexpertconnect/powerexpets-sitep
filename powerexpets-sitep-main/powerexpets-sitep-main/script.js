// Gestion du menu mobile simplifiée
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    if(navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = '#FFFFFF';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.05)';
    }
});

// Animation / Event Tracking simulator
const ctaButtons = document.querySelectorAll('.badge-google, .header-btn');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log('Redirection vers Google Play Store initiée.');
    });
});
