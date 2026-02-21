// Function to load the header and footer on the pages
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent('head', 'head.html');
loadComponent('header', 'header.html');
loadComponent('footer', 'footer.html');

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