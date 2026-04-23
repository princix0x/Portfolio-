/**
 * Portfolio de RATOVELO Michel Princy
 * Script interactif pour la licence informatique EMIT
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. GESTION DE L'APPARITION AU SCROLL ---
    // Cette partie utilise l'Intersection Observer pour animer les cartes au défilement
    const observerOptions = {
        threshold: 0.15, // Déclenche l'animation quand 15% de l'élément est visible
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // On cible les éléments à animer (titres, sections, cartes)
    const elementsToAnimate = document.querySelectorAll('section, .card, h2, h1');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in'); // On s'assure qu'ils ont la classe de base
        observer.observe(el);
    });


    // --- 2. EFFET DE CLIC INTERACTIF (RIPPLE EFFECT) ---
    // Ajoute une petite onde colorée là où l'utilisateur clique
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        
        // Positionnement précis sous le curseur
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        
        document.body.appendChild(ripple);

        // Suppression automatique après l'animation (600ms)
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    console.log("Système interactif activé !");
});
