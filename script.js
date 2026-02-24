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

    // To change primary picture on click on the gallery
    const primaryImage = document.querySelector("#primaryImage");
    const imagesGallery = document.querySelectorAll("#imagesGallery img");
    imagesGallery.forEach(img => {
        img.addEventListener('click', () => {
            primaryImage.src = img.src;
            imagesGallery.forEach(img => {
                img.style.opacity = 0.7;
            });
            img.style.opacity = 1;
        });
    });
})();