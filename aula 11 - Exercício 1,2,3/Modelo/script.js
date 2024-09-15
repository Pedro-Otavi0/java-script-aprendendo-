function carregar(){

var h = new Date()
var hora = h.getHours()
var horas = document.getElementById("horas")
var foto = document.getElementById("imagem")
//var hora = 19
if (hora >= 0 && hora < 12){
    horas.innerHTML = `<strong>Agora são ${hora} horas da manhã, Bom dia!!</strong>`
    foto.src = 'manha(1).png'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18){
    horas.innerHTML = `<strong>Agora são ${hora} horas da tarde, Boa tarde!! </strong>`
    foto.src = 'Tarde(1).png'
    document.body.style.background = 'orange'
}else{
    horas.innerHTML = `<strong>Agora são ${hora} horas da noite, Boa noite!!</strong>`
    foto.src = 'noite(1).png'
    document.body.style.background = '#515554'
}
}