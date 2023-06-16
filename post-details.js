//На странице post-details.html:
//7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
//8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
const userId = new URL (location.href).searchParams.get(`postId`);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) =>res.json())
    .then((user) => {
        //console.log(userId)
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

//function ulBuilder(key, object, parent){
    function ulBuilder(key,object, parent){
        const li = document.createElement(`li`);
        const ul = document.createElement(`ul`);
        li.innerText = `${key}`
        parent.appendChild(li);
        li.appendChild(ul);
        recursiveBuilder(object, ul);


}

function recursiveBuilder(object, parent) {
    for (const key in object) {
        typeof object[key] === `object`
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }

}

fetch(`https://jsonplaceholder.typicode.com/comments/${userId}`)
    .then((res) =>res.json())
    .then((user) => {
        //console.log(user)
        const box = document.getElementsByClassName(`wrap`)[0];
        const ul = document.createElement(`ul`);
        recursiveBuilder(user, ul);
        box.appendChild(ul);
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

};














