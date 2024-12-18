function toggleMode() {
    //alterar o modo light para dark
    const html = document.documentElement
    html.classList.toggle('light')


   //alterar a imagem de perfil
    const image = document.querySelector("#profile img")

    if (html.classList.contains('light')){
        image.setAttribute('src', './images/Avatar-lightmode.png') 
    }else image.setAttribute('src', './images/Avatar.png')
}

