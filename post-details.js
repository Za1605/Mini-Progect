//На странице post-details.html:
//7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
//8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//const urlParams = new URLSearchParams(window.location.search);
//const ID = urlParams.get("postId")
//
//


//console.log (post)
//let url = new URLSearchParams(window.location.search);

//let postId = post.get('postId');
//console.log(postId)
//console.log(JSON.stringify(postId))

const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get("postId");
fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
 .then(response => response.json())
 .then(posts =>{
     let ul = document.createElement('ul');
     for (const post of posts) {
         let li = document.createElement('li');
         li.innerHTML = '<li>${post.id}</li><li>${post.name}</li><li>${post.email}</li><li>${post.body}</li>';
         ul.appendChild(li);
     }
     document.body.appendChild(ul);
 });










