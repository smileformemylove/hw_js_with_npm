'use strict'

const img = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg",
    "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"
];

setInterval(function() {
    const randomIndex = Math.floor(Math.random() * img.length);
    const randomImage = img[randomIndex];
    document.getElementById("randomImage").src = `img/${randomImage}`;
}, 1000);
