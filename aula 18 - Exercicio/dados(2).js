var numero = document.getElementById("zercen")
var lista = []
var bamDados = document.querySelector("#bandados")
var res = document.querySelector("#res")
var encon = document.querySelector("#Encontrar")


function temOnumero(l, n){
    if(l.indexOf(Number(n.value)) !== -1){
        return true
    }else{
        return false
    }
}
function numInCompativel(n){
  if (n.value < 1 || n.value >100){
    return true
  }else{
    return false
  }
}


    function AdicionarValor() {
        if(numero.value ==''){
        window.alert("Escreva um valor!!!!")
        }else if(temOnumero(lista, numero)){
            window.alert("O numero já esta na lista")
        }else if(numInCompativel(numero)){
            window.alert("Coloque um numero de 0 a 100")
        }else{
            var item = document.createElement("option")
            item.text = `O valor ${numero.value} foi adicionado`
            bamDados.appendChild(item)
            lista.push(Number(numero.value))
            numero.focus()
        }
    }
    
    function encontrar(){
        if(lista.indexOf(encon) == -1){
            console.log(lista)
            console.log(lista.indexOf(encon))
            console.log(Number(encon.value))

            window.alert("O valor que você pediu não foi adicionado")
        }else{
            var valorPedido = 0
         for (let e in lista){
            if(lista[e] == encon.value){
                valorPedido += lista[e]
            }
         }
         res.innerHTML += `O valor que você pediu existe é ele esta na posição ${lista.indexOf(valorPedido)}`
    }
    
}

     function finalizar() {
        res.innerHTML = ''
        if (lista == 0){
            window.alert("Coloque valores")
        }else{
            if(lista.length == 1){
                res.innerHTML += `Foi colocado o valor ${lista.length}`
            }else{
            res.innerHTML += `Foi colocado ${lista.length} valores`
             var maior = lista[0]
             var menor = lista [0]
             var soma = 0
             }
            for (let i=0; i<=lista.length; i++){
                soma += lista[i]
                 if (maior < lista[i]){
                    maior = lista[i]
                if (menor > lista[i]){
                    menor = lista[i]
                
            }
                 }
            }
            }
           res.innerHTML += `<p>o maior valor é ${maior}</p>`
           res.innerHTML += `<p>o menor valor é ${menor}</p>`
           res.innerHTML += `<p>a soma dos valores é ${soma}</p>`
        }
     