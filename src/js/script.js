'use strict'

const createElements =() => {
    const hoverDiv = document.createElement('div');
    hoverDiv.id = "hoverDiv";
    hoverDiv.textContent = "Наведи мишку на мене";

    const shadowDiv = document.createElement('div');
    shadowDiv.id = "shadowDiv";
    shadowDiv.setAttribute("data-visible", "false");
    shadowDiv.textContent = "ПРИВІТ";

    return { hoverDiv, shadowDiv };
}

const addToPage=(elements)=>{
    document.body.appendChild(elements.hoverDiv);
    document.body.appendChild(elements.shadowDiv);
}

const addEvent = ({ hoverDiv, shadowDiv }) => {
    hoverDiv.addEventListener('mouseover', () => {
        shadowDiv.setAttribute('data-visible', 'true');
    });

    hoverDiv.addEventListener('mouseout', () => {
        shadowDiv.setAttribute('data-visible', 'false');
    });
};

const elements = createElements();
addToPage(elements);
addEvent(elements);

