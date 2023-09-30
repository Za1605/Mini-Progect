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
        let div_info_user = document.createElement('div');
        div_info_user.classList.add('block_info_user');
        box.classList.add('block_info_user');
        let ul = document.createElement('ul');
        let butPost =  document.createElement('button');
        butPost.innerText = `post of current user`;
        butPost.classList.add('btnPost');
        recursiveBuilder(user, ul);
        box.appendChild(ul);
        box.appendChild(butPost);
        butPost.onclick = function (e) {
            e.preventDefault();

            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => response.json())
                .then(posts =>{
                    let main_div_post = document.createElement('div')
                    main_div_post.classList.add('main_div_post')
                    for (const postElement of posts) {
                        let divPost = document.createElement('div')
                        divPost.classList.add('divPost')
                        let h2Post = document.createElement('h2')
                        let btnInfoPost = document.createElement('button')
                        btnInfoPost.onclick = function (){
                            location.href = `post-details.html?userId=${userId}`

                        }
                        btnInfoPost.innerText = 'Post info'
                        btnInfoPost.classList.add('btnInfoPost')
                        h2Post.innerText = `${postElement.title}`
                        divPost.append(h2Post, btnInfoPost)
                        main_div_post.append(divPost)

                        document.body.append(main_div_post)
                    }
                    btnPost.setAttribute('disabled', 'disabled');
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





