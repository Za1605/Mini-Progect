
const userId = new URL (location.href).searchParams.get(`userId`);

fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
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

function ulBuilder(key, object, parent){
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

};














