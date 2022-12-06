function modalPosts(list){

    const main = document.querySelector('main')

    for(let i = 0; i < list.length; i++){

    const article = document.createElement('article')
    main.appendChild(article)

    const h2 = document.createElement('h2')
    h2.innerHTML = list[i].title
    article.appendChild(h2)

    const p = document.createElement('p')
    p.innerText = list[i].text
    article.appendChild(p)

    }
}

modalPosts(posts)