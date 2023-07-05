function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res  = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique o ano e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'image/bebe-homem.png')
            } else if (idade < 19 ) {
                //Jovem
                img.setAttribute('src', 'image/jovem-homem.png')

            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'image/adulto-homem.png')
            } else  {
                //Idoso
                img.setAttribute('src', 'image/idoso-homem.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'image/bebe-mulher.png')
            } else if (idade < 19 ) {
                //Jovem
                img.setAttribute('src', 'image/jovem-mulher.png')

            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src', 'image/adulta-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'image/idosa-mulher.png')
            }
        }
       if (idade >= 0 && idade < 10) {
        res.innerHTML = `Detectamos uma criança com ${idade} anos`
       } else if (idade < 19) {
        res.innerHTML = `Detectamos um adolescente com ${idade} anos`
       } else if (idade < 50) {
        res.innerHTML = `Detectamos um adulto com ${idade} anos`
       } else {
        res.innerHTML = `Detectamos um idoso com ${idade} anos`
       }
        
        res.appendChild(img)
    }
}
