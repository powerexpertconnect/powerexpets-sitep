document.addEventListener("DOMContentLoaded", () => {
    // 1. Interaction sur le bouton de téléchargement
    const downloadBtn = document.querySelector('.btn-download');
    downloadBtn.addEventListener('click', () => {
        alert("Le téléchargement de l'application PowerExperts Connect va commencer !");
    });

    // 2. Animation d'apparition des cartes au défilement (effet fluide)
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Optionnel : arrête d'observer une fois animé
            }
        });
    }, observerOptions);

    // Initialisation des styles pour l'animation
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        cardObserver.observe(card);
    });
});


