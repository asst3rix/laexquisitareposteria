const u1 = navigator.userAgent;
const u2 = navigator.vendor;
const u3 = window.opera;

const u11 = document.querySelector('#u1');
const u22 = document.querySelector('#u2');
const u33 = document.querySelector('#u3');

u11.textContent = u1 || "None";
u22.textContent = u2 || "None";
u33.textContent = u3 || "None";