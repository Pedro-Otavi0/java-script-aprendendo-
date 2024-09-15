//var hora = new Date()
//var hora1 = hora.getHours()
/*var hora1 = 

if (hora1 >= 6 && hora1 < 12){
    console.log(`agora são ${hora1} horas da manhã`)
}else if (hora1 >= 12 && hora1 < 18){
    console.log(`agora são ${hora1} horas da tarde`)
}else{
    console.log(`agora são ${hora1} horas da madrugada`)
}

//console.log(`agora são ${hora1} horas`)
*/
var d = new Date()
var dia = d.getDay()
//var dia =
switch (dia){
    case 0:
        console.log("Today is Sunday")
        break
    case 1:
        console.log("Hoje é terça-feira")
        break
    case 2:
        console.log("Hoje é quarta-feira")
        break
    case 3:
        console.log("Hoje é quinta-feira")
        break
    case 4:
        console.log("Hoje é sexta-feira")
        break
    case 5:
        console.log("Today is Saturday")
        break
    case 6:
        console.log("hoje é segunda-feira")
        break
}