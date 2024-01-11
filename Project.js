
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((res) => res.json())
.then((users) =>{
    const block = document.getElementsByClassName(`wrap`)[0];
    for (const user of users) {
        const userBox = document.createElement(`div`);
        userBox.innerText = `${user.id}- ${user.name}`;
        block.appendChild(userBox);


        const button = document.createElement(`button`);
        button.innerText = `user details`;
        userBox.appendChild(button);

        button.onclick = () => {
            location.href = `us-details.html?userId=${user.id}`;
        }

    }
});

