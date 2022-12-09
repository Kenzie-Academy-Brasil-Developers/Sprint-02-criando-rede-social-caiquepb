function modalPosts(list, user){

    const main = document.querySelector('main')

    for(let i = 0; i < list.length; i++){

        const article = document.createElement('article')
        main.appendChild(article)

        const div = document.createElement('div')
        div.classList.add("user__conteiner")
        article.appendChild(div)

        const img = document.createElement('img')
        div.appendChild(img)

        const bloco = document.createElement('div')
        bloco.classList.add("user__infos")
        div.appendChild(bloco)

        const nameBloco = document.createElement('h2')
        bloco.appendChild(nameBloco)

        const stackBloco = document.createElement('p')
        stackBloco.classList.add("user__stack")
        bloco.appendChild(stackBloco)

        for (let j = 0; j < user.length; j++){
            if(user[j].id === list[i].user){
                img.src = user[j].img
                nameBloco.innerText = user[j].user
                stackBloco.innerText = user[j].stack
            }
        }
        
        const titlePost = document.createElement('h2')
        titlePost.classList.add("title_post")
        titlePost.innerHTML = list[i].title
        article.appendChild(titlePost)

        const textPost = document.createElement('p')
        textPost.classList.add("text__post")
        textPost.innerText = list[i].text
        article.appendChild(textPost)

        const seeMore = document.createElement('button')
        seeMore.classList.add("button__post")
        seeMore.innerText = "Abrir Post"
        article.appendChild(seeMore)
        seeMore.addEventListener('click', function(){

            const modalSection = document.createElement('section')
            modalSection.classList.add('modal__container')
            main.appendChild(modalSection)

            const divSection = document.createElement('div')
            divSection.classList.add('modal__div')
            modalSection.appendChild(divSection)

            const fecharModal = document.createElement('span')
            fecharModal.innerText = "X"
            fecharModal.classList.add('modal__fechar')
            divSection.appendChild(fecharModal)
            fecharModal.addEventListener('click', () => {
                modalSection.remove()
            })

            const divModal = document.createElement('div')
            divModal.classList.add("user__conteiner")
            divSection.appendChild(divModal)

            const imgModal = document.createElement('img')
            imgModal.src = img.src
            divModal.appendChild(imgModal)

            const blocoModal = document.createElement('div')
            blocoModal.classList.add("user__infos")
            divModal.appendChild(blocoModal)

            const nameBlocoModal = document.createElement('h2')
            nameBlocoModal.innerText = nameBloco.innerText
            blocoModal.appendChild(nameBlocoModal)

            const stackBlocoModal = document.createElement('p')
            stackBlocoModal.innerText = stackBloco.innerText
            stackBlocoModal.classList.add("user__stack")
            blocoModal.appendChild(stackBlocoModal)
            
            const titlePostModal = document.createElement('h2')
            titlePostModal.classList.add("title_post")
            titlePostModal.innerHTML = list[i].title
            divSection.appendChild(titlePostModal)

            const textPostModal = document.createElement('p')
            textPostModal.classList.add("text__post")
            textPostModal.innerText = list[i].text
            divSection.appendChild(textPostModal)
        })
    }
}

modalPosts(posts, users)