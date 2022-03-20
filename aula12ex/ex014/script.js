function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
   
    msg.innerHTML = `Agora são ${horas} horas.`
    if (horas >= 0 && horas < 12){
        //BOM DIA!
        img.src = "imagens/fotomanha.png"
        msg.innerHTML += `<p>BOM DIA!</p>`
        document.body.style.background = '#e2cd9f'
    }else if (horas >= 12 && horas <= 18 ){
        //BOA TARDE!
        img.src = "imagens/fototarde.png"
        msg.innerHTML += `<p>BOA TARDE!</p>`
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE!
        img.src = "imagens/fotonoite.png"
        msg.innerHTML += `<p>BOA NOITE!</p>`
        document.body.style.background = '#515154'
    }
}

