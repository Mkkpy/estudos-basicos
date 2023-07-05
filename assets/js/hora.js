function carregar() {
    let msg = window.document.querySelector('div#msg')
    let img = window.document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia   
        img.src = 'image/manha.png'
        document.body.style.background = '#9b4b21'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'image/tarde.png'
        document.body.style.background = '#ffbb4c'
    } else {
        //Boa noite
        img.src = 'image/noite.png'
        document.body.style.background = '#001242'
    }
}