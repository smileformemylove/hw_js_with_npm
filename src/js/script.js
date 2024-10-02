'use strict'

const img = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg",
    "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"
];

function randomImage() {
    const randomIndex = Math.floor(Math.random() * img.length);
    const randomImage = img[randomIndex];
    // console.log(randomIndex)
    document.getElementById("randomImage").src = `img/${randomImage}`;
}

randomImage();
