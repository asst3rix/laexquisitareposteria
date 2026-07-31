const burgerMenuManagement = (function () {
    const title = document.querySelector('#title');
    const burger = document.querySelector('#burger-container');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // SÉCURITÉ : On vérifie que burger existe sur cette page
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            const isOpening = !burger.classList.contains('clicked');
            burger.classList.remove('clicked', 'unclicked');
            burger.classList.add(isOpening ? 'clicked' : 'unclicked');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    if (links) {
        links.forEach(link => {
            link.addEventListener('click', () => {
                shutDownMenu();
            });
        });
    }

    if (title) {
        title.addEventListener('click', () => {
            const menuOpen = document.body.classList.contains('menu-open');
            if (menuOpen) {
                shutDownMenu();
            }
        });
    }

    const shutDownMenu = () => {
        if (burger && navLinks) {
            burger.classList.replace('clicked', 'unclicked');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
})();

const thumbnailsManagement = (function () {
    const mainImageContainer = document.querySelector("#mainImageContainer");
    const mainImages = document.querySelectorAll("#mainImageContainer img");
    const thumbnails = document.querySelectorAll("#thumbnails img");

    if (!mainImageContainer || thumbnails.length === 0) return; // SÉCURITÉ

    const updateOpacity = (index) => {
        thumbnails.forEach((img, i) => {
            img.style.opacity = (i === index) ? "1" : "0.7";
        });
    }

    thumbnails.forEach((img, index) => {
        img.addEventListener('click', () => {
            const targetImg = mainImages[index];
            if (targetImg && mainImageContainer) {
                mainImageContainer.scrollTo({
                    left: targetImg.offsetLeft - mainImageContainer.offsetLeft
                });
            }
            updateOpacity(index);
        });
    });

    const observerOptions = {
        root: mainImageContainer,
        threshold: 1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(mainImages).indexOf(entry.target);
                updateOpacity(index);
            }
        });
    }, observerOptions);

    mainImages.forEach(img => observer.observe(img));
})();

const productCardsManagement = (function () {
    const productCards = document.querySelectorAll('.product-cards');
    if (productCards.length === 0) return; // SÉCURITÉ

    const observerOptions = {
        root: null,
        threshold: 0.3
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    productCards.forEach(product => observer.observe(product));
})();

const klaroButtonRGPD = (function () {
    /* CONFIGURATION DU BOUTON KLARO SUR LA PAGE RGPD */
    document.addEventListener('DOMContentLoaded', function () {
        const openKlaroBtn = document.getElementById('open-klaro-btn');

        if (openKlaroBtn) {
            openKlaroBtn.addEventListener('click', function (e) {
                e.preventDefault();

                if (typeof klaro !== 'undefined') {
                    if (typeof klaro.show === 'function') {
                        klaro.show(window.klaroConfig, true);
                    } else if (typeof klaro.getManager === 'function') {
                        const manager = klaro.getManager();
                        if (manager) manager.showModal();
                    }
                } else {
                    console.error("Klaro n'est pas encore disponible.");
                }
            });
        }
    });
})();