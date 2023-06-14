
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((res) => res.json())
.then((users) =>{
    const block = document.getElementsByClassName(`wrap`)[0];
    for (const user of users) {
        const user_block = document.createElement(`div`);
        user_block.innerText = `${user.id}. ${user.name}`;
        block.appendChild(user_block);


        const button = document.createElement(`button`);
        button.innerText = `user details`;
        user_block.appendChild(button);

        button.onclick = () => {
            location.href = `us-details.html?userId=${user.id}`;
        }

    }
});