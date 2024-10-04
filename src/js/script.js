'use strict'

const hoverDiv = document.getElementById('hoverDiv');
const shadowDiv = document.getElementById('shadowDiv');


hoverDiv.addEventListener('mouseover', () => {
    shadowDiv.setAttribute('data-visible', 'true');
});


hoverDiv.addEventListener('mouseout', () => {
    shadowDiv.setAttribute('data-visible', 'false');
});

