//На странице post-details.html:
//7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
//8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//const urlParams = new URLSearchParams(window.location.search);
//const ID = urlParams.get("postId")
//
//

//const id = new URL (location.href).searchParams.get('id');
let url = new URL(location.href);
let postId = url.searchParams.get('userId/post');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(posts =>{
        //console.log(comments);})
        let ul = document.createElement('ul');
        for (const post of posts) {
            let li = document.createElement('li');
            li.innerHTML = `<li>${post.id}</li><li>${post.name}</li><li>${post.email}</li><li>${detail.body}</li>`;
            ul.appendChild(li);
        }
        document.body.appendChild(ul)
    });










