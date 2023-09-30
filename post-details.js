//На странице post-details.html:
//7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
//8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//const urlParams = new URLSearchParams(window.location.search);
//const ID = urlParams.get("postId");
const id = new URL (location.href).searchParams.get(`postsid`);



 fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    .then(response => response.json())
    .then(post => {
        let divAllPost1 = document.createElement('div')
        for (const postTitle in post) {
            //if (title === postElement.title){
                let divAllPost = document.createElement('div')
               divAllPost.classList.add('divAllPost')
                let ul = document.createElement('ul')
                for (const key of postElement) {
                    let li = document.createElement('li')
                    //li.innerHTML = `${key} ${postElement[key]}`
                    li.classList.add('li_user')
                    ul.append(li)
                }
               divAllPost1.append(ul);
               document.body.append(divAllPost1);


        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response => response.json()))
            .then(comments =>{
                let main_comments_post = document.createElement('div')
                main_comments_post.classList.add('main_comments_post')
                let comments_post = document.createElement('div')
                comments_post.classList.add('comments_post')

                let h1 = document.createElement('h1')
                h1.innerText = 'Comments Post:'
                document.body.append(h1)
                document.body.append(comments_post)
                for (const element of comments) {
                    let divComments = document.createElement('div')
                    let ul = document.createElement('ul')
                    divComments.classList.add('divComments')
                    for (const key in element) {

                        let li = document.createElement('li')
                        li.classList.add('li_user')
                        li.innerHTML = `<b>${key}</b>: ${element[key]}`
                        ul.append(li)
                        divComments.append(ul)
                    }
                    main_comments_post.append(divComments)
                    document.body.append(main_comments_post)
                }

            } )