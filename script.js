const script = (function () {
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

    // To change primary picture on click on the gallery.
    const mainImageContainer = document.querySelector("#mainImageContainer");
    const mainImages = document.querySelectorAll("#mainImageContainer img");
    const thumbnails = document.querySelectorAll("#thumbnails img");
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

            // We change opacity of the active image.
            thumbnails.forEach(img => img.style.opacity = 0.7);
            img.style.opacity = 1;
        });
    });
})();