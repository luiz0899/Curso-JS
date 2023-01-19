
function carregar() {
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date( ) 
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
  
    if( hora >= 0 && hora < 12){
        // bom dia 
        img.src = 'fotoManha.png'
        document.body.style.background ='rgb(5, 134, 169)'
    }else if(hora >= 12 && hora <18  ){
        // boa tarde
        img.src = 'fotoTarde.png'
        document.body.style.background ='rgb(169, 134, 5)'
    }else {
        //boa noite
        img.src = 'fotoNoite.png'
        document.body.style.background = 'rgb(0, 0, 82)'
    }

}
