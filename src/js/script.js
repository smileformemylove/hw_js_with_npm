'use strict';

(function() {
    function generateList(array) {
        const ul = document.createElement('ul');

        array.forEach(item => {
            const li = document.createElement('li');
            // console.log(item);

            if (Array.isArray(item)) {
                li.appendChild(generateList(item));
            } else {
                li.textContent = item;
            }

            ul.appendChild(li);
        });
        return ul;
    }


    const array1 = [1, 2, 3];
    const array2 = [1, 2, [1.1, 1.2, 1.3], 3];
    const array3 = [1, 2, [1.1, 1.2, [1.1, 1.2, 1.3], 1.3], 3, 5];

    document.body.appendChild(generateList(array1));
    document.body.appendChild(generateList(array2));
    document.body.appendChild(generateList(array3));
})();