'use strict';

const getPostById = async () => {
    const myInput = document.createElement('input')
    myInput.type = 'number';
    myInput.placeholder = 'Введіть ІД поста від 0 до 100'
    document.body.appendChild(myInput);

    const myButton = document.createElement('button')
    myButton.textContent = 'Знайти'
    document.body.appendChild(myButton);

    const myContainer = document.createElement('div')
    document.body.appendChild(myContainer);

    myButton.addEventListener('click', async () =>{
        const postId = parseInt(myInput.value, 10);

        if (isNaN(postId) || postId < 1 || postId > 100){
            myContainer.textContent = 'введіть будь ласка число від 1 до 100';
            return;
        }

        try {
            let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            post = await post.json();

            myContainer.innerHTML =
                `<h2>"userId": ${post.userId}</h2>
                 <h2>"id": ${post.id}</h2>
                 <h2>"title": ${post.title}</h2> 
                 <h2>"body": ${post.body}</h2>`;

        } catch (err) {
            myContainer.textContent = 'Пост не знайдено або виникла помилка.'
        }
    });
};
getPostById();
