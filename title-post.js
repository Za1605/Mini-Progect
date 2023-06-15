
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((users) =>{
        const block = document.getElementsByClassName(`wrap`)[0];
        for (const user of users) {
            const user_block = document.createElement(`div`);
            user_block.innerText =  `${user.title}` ;
            block.appendChild(user_block);


            const button = document.createElement(`button`);
            button.innerText = `title posts`;
            user_block.appendChild(button);

            button.onclick = () => {
                location.href = `post-details.html?userId=${user.id}`;
            }

        }
    });