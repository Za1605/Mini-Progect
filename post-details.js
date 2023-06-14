
/*const userId = new URL (location.href).searchParams.get(`post`);

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) =>res.json())
    .then((user) => {
        console.log(userId)
        const block = document.getElementsByClassName(`wrap`)[0];
        const ul = document.createElement(`ul`);
        recursiveBuilder(user, ul);
        block.appendChild(ul);
    });

function liCreator(key, value, parent) {
    const li = document.createElement(`li`);
    li.innerText = `${key} : ${value}`;
    parent.appendChild(li);
}

function ulBuilder(key, object, parent){
}

function recursiveBuilder(object, parent) {
    for (const key in object) {
        typeof object[key] === `object`
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }

}


 */

var urlParams = new URLSearchParams(window.location.search);
var postId = urlParams.get('id');

// Отримання даних про обраний пост
fetch(`https://jsonplaceholder.typicode.com/posts/ ${postId}`)
    .then((response) => response.json())
    .then(user) => {
        // Відображення інформації про пост
        let postDetailsElement = document.getElementById("post-details");
        postDetailsElement.innerHTML = "<h2>" + post.title + "</h2>" +
            "<p>" + post.id + "</p>" +
            "<p>userId: " + post.userId + "</p>";
    });