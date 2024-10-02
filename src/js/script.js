'use strict';

let count = 0;

const appendHTMLElement = (parentEL = null, elementToAppend = null) => {
    if (!parentEL || !elementToAppend) return;
    parentEL.append(elementToAppend);
};

const generateTable = (rows = 0, columns = 0 ) => {

    const table = document.createElement('table');
    table.className = 'table table-white table-striped-columns';
    const tbody = document.createElement('tbody');

    table.append(tbody);

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let c = 0; c < columns; c++) {
            const td = document.createElement('td');
            td.innerHTML = '';
            tr.append(td);
        }

        tbody.append(tr);
    }

    return table;
};


const tableContainer = document.getElementById('myTable');
const newTable = generateTable(10, 10);
appendHTMLElement(tableContainer, newTable);

setInterval(() => {
    if (count < 100) {
        const rowIndex = Math.floor(count / 10);
        const cellIndex = count % 10;

        const row = newTable.rows[rowIndex];
        const cell = row.cells[cellIndex];
        console.log(count)
        cell.textContent = count + 1;

        count++;
    }
}, 100);