//На странице post-details.html:
//7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
//8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//const urlParams = new URLSearchParams(window.location.search);
//const ID = urlParams.get("postId");
const id = new URL (location.href).searchParams.get(`posts`);


 fetch(`https://jsonplaceholder.typicode.com/posts`)

    .then(response => response.json())
    .then(post => {
        let allpost1 = document.createElement('div');
        for (const postEl of post) {
            if (id === postEl.id) {
                let allpost = document.createElement('div');
                allpost.classList.add('allpost')
                let ul = document.createElement('ul');
                for (const key of postEl) {
                    let li = document.createElement('li');
                    li.innerHTML = `${key} ${postEl[key]}`;
                    li.classList.add('li_user');
                    ul.append(li);
                }
                allpost.append(ul);
                document.body.append(allpost1);
            }
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(( response => response.json() ))
            .then(comments => {

                let commentsPost = document.createElement('div');
                commentsPost.classList.add('commentsPost');
                let commentsPost1 = document.createElement('div');
                commentsPost1.classList.add('commentsPost1');

                let h1 = document.createElement('h1');
                h1.innerText = 'Comments Post';
                document.body.append(h1);
                document.body.append(commentsPost);
                for (const value of comments) {
                    let divComments = document.createElement('div');
                    let ul = document.createElement('ul');
                    divComments.classList.add('divComments');
                    for (const key in element) {

                        let li = document.createElement('li');
                        li.classList.add('li_user');
                       li.innerHTML = `<b>${key}</b>: ${element[key]}`;
                        ul.append(li);divComments.append(ul);
                    }
                   commentsPost.append(divComments);
                   document.body.append(commentsPost);
                }
            })



        })
