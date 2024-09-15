

var ano = new Date()
var anoAtual = ano.getFullYear()

 function enviar(){
   
var digt = document.getElementById("anoDenascimento")
var sexo = document.getElementsByName("radsex")
var genero = ""
var idade = anoAtual-Number(digt.value)
var foto = document.getElementById('picture')

if (digt.value == 0 || anoAtual<digt || digt.value<1900){
    window.alert("Verifique seus dados")
}else{
    if(sexo[0].checked){
        genero = 'Homem'
         
        if(idade <= 10){
            //Crinça
           foto.src = 'Menino.png'
        }else if(idade>10 && idade<=21){
            //jovem
            foto.src = 'JovenH.png'
        }else if(idade>21 && idade<=50){
            //adulto
            foto.src = 'Homen.png'
        }else if(idade>50){
            //idoso
            foto.src = 'Velho.png'
        }
        
    }else if(sexo[1].checked){
        genero = 'Mulher'

        if(idade <= 10){
            //Crinça
            foto.src = 'Menina.png'
        }else if(idade>10 && idade<=21){
            //jovem
            foto.src = 'JovenM.png'
        }else if(idade>21 && idade<=50){
            //adulto
            foto.src = 'Mulher.png'
        }else if(idade>50){
            //idoso
            foto.src = 'Vovo.png'
        }
    }
    if(genero == 'Homem'){
    document.getElementById("pee").innerHTML = `Voce é um ${genero} de <strong>${idade}</strong> anos`
    }else if (genero == 'Mulher'){
        document.getElementById("pee").innerHTML = `Voce é uma ${genero} de <strong>${idade}</strong> anos`
    }
}
 }