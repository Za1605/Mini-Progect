//На странице user-details.html:
//4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
//5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
//(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
   // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пос
 const userId = new URL (location.href).searchParams.get(`userId`);


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let box = document.createElement('div');
        let userInfo = document.createElement('div');
        userInfo.classList.add('userInfo');
        box.classList.add('box');
        let ul = document.createElement('ul');
        let but1 =  document.createElement('button');
        but1.innerText = `post of current user`;
        but1.classList.add('but1');

        recursiveBuilder(user, ul);
        userInfo.append(ul);
        box.append(but1,userInfo );
        but1.onclick = function (e) {

            e.preventDefault();

            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => response.json())
                .then(posts =>{
                    let divPost = document.createElement('div');
                    divPost.classList.add('divPost')
                    for (const postElement of posts) {
                        let divPost1 = document.createElement('div');
                        divPost1.classList.add('divPost1')
                        let hPost = document.createElement('h2');
                        let btnPost = document.createElement('button');
                        btnPost.onclick = function (){
                            location.href = `post-details.html?id=${userId.post}`

                        }
                       btnPost.innerText = 'Post info';
                       btnPost.classList.add('btnPost');
                        hPost.innerText = `${postElement.title}`;
                        divPost1.append(hPost, btnPost);
                        divPost.append(divPost1);

                        document.body.append(divPost);
                    }

                })

        }
        document.body.append(box);

    })


function liCreator(key, value, parent) {
    const li = document.createElement(`li`);
    li.innerText = `${key} : ${value}`;
    parent.appendChild(li);
}
function ulBuilder(key,object, parent){
    const li = document.createElement(`li`);
    const ul = document.createElement(`ul`);
    li.innerText = `${key}`
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuilder(object, ul);
}



function recursiveBuilder(object, parent,) {
    for (const key in object) {
        typeof object[key] === `object`
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }

}



//btn.onclick = function (){
    //location.href = `post-details.html?userId=${userId}`;
//};





