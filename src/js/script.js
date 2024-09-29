'use strict';

let count = 0;
const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];

const appendHTMLElement = (parentEL = null, elementToAppend = null) => {
    if (!parentEL || !elementToAppend) return;
    parentEL.append(elementToAppend);
};

const generateTable = () => {
    const tableSize = 10;

    const table = document.createElement('table');
    table.className = 'table table-dark table-striped-columns';
    const tbody = document.createElement('tbody');

    table.append(tbody);

    for (let i = 0; i < tableSize; i++) {
        const tr = document.createElement('tr');

        for (let c = 0; c < tableSize; c++) {
            const td = document.createElement('td');
            td.innerHTML = '';
            tr.append(td);
        }

        tbody.append(tr);
    }

    return table;
};


const tableContainer = document.getElementById('myTable');
tableContainer.innerHTML = '';
const newTable = generateTable();
appendHTMLElement(tableContainer, newTable);

const tableBody = newTable.getElementsByTagName('tbody')[0];

setInterval(() => {
    if (count < 100) {
        const rowIndex = Math.floor(count / 10);
        const cellIndex = count % 10;

        const row = tableBody.rows[rowIndex];
        const cell = row.cells[cellIndex];
        console.log(count)
        cell.textContent = count + 1;

        count++;
    }
}, 100);
