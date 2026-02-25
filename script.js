const burgerMenuManagement = (function () {
    // When we click the burger menu, we show the menu and change the icon to a cross.
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active-burger');
    });

    // We're doing this to remove the burger menu after clicking on a link and set the icon back as a burger.
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active-burger');
        });
    });
})();

const thumbnailsManagement = (function () {
    const mainImageContainer = document.querySelector("#mainImageContainer");
    const mainImages = document.querySelectorAll("#mainImageContainer img");
    const thumbnails = document.querySelectorAll("#thumbnails img");

    // Update opacity of a thumbnails  given its index.
    const updateOpacity = (index) => {
        thumbnails.forEach((img, i) => {
            img.style.opacity = (i === index) ? "1" : "0.7";
        });
    }

    // To change primary picture on click on the gallery.
    thumbnails.forEach((img, index) => {
        img.addEventListener('click', () => {
            // We save the index of the image that has been clicked on.
            const targetImg = mainImages[index];
            // Security
            if (targetImg && mainImageContainer) {
                mainImageContainer.scrollTo({
                    // We make sure we start from the beginning of mainImageContainer and not the left of the screen.
                    left: targetImg.offsetLeft - mainImageContainer.offsetLeft
                });
            }
            updateOpacity(index);
        });
    });

    // Observer management, to manage opacity of the active image when we swipe with the finger.
    const observerOptions = {
        // We give him where to observe.
        root: mainImageContainer,
        // Image is consider active when 100% of its surface is visible.
        threshold: 1  
    };

    // We give to IntersectionObserver, 1st the what to do (the function), 2nd what to use (observerOptions)
    // one entry = one image
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // entry.isIntersecting is true when the threshold set above is reached.
            if (entry.isIntersecting) {
                // Retrieve the index of the active image:
                // 1. Array.from(mainImages) makes an array of the img DOM objects so indexOf can be used.
                // 2. entry.target return the whole DOM object (ex: <img src="../images/pack1.png" alt="Pack Semitas">)
                // 3. indexOf returns the index of the active image in the array.
                const index = Array.from(mainImages).indexOf(entry.target);
                updateOpacity(index);
            }
        });
    }, observerOptions);

    // Set the observer to observe all images
    mainImages.forEach(img => observer.observe(img));
})();