var numero = document.getElementById("zercen")
var lista = []
var lis = document.getElementById("bandados")
var res = document.querySelector("#res")

function seNumero(n){
    if(Number(n) > 100 || Number(n) < 1){
        return true
    }else{
        return false
    }
}
function jaNumero(l, n){
    if(l.indexOf(Number(n.value)) !== -1){
        return true
    }else{
        return false
    }
    
}


function AdicionarValor(){
    if(numero.value == ''){
        window.alert("Coloque um valor!!")
    }else if(seNumero(Number(numero.value))) {
        window.alert("[ERRO] número invalido")

    }else if(jaNumero(lista, numero)){
        window.alert("[ERRO] Numero ja esta na lista")
    }else{
        lista.push(Number(numero.value))

        var item = document.createElement("option")

        item.text = `O valor ${numero.value} foi adicionado`
        lis.appendChild(item)
        
        console.log(lista.indexOf(Number(numero.value)))
        console.log(lista)
        numero.innerHTML =''
        numero.focus()
    }
}
function finalizar() {
    res.innerHTML =''
    if(lista == 0){
        window.alert("Adicione um valor")
    }else{
        if(lista.length > 1){
   res.innerHTML += `<p>Foi adicionado ${lista.length} valores</p>`
   res.innerHTML += `São eles ${lista}`

   
   
   let maior = lista[0]
   let menor = lista[0]
   var soma = 0     
      
   for(let pos in lista){
    
     soma += lista[pos]
    if(lista[pos]>maior)
        maior = lista[pos]
    if(lista[pos]<menor)
        menor = lista[pos]
   
   }
   var media = soma/lista.length
    res.innerHTML += `<p>O maior valor é ${maior}</p>`
    res.innerHTML += `<p>O menor valor é ${menor}</p>`
    res.innerHTML += `<p>A soma deles é ${soma}`
    res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}`
        }else{
            res.innerHTML += `<p>Foi adicionado ${lista.length} valor</p>`
            res.innerHTML += `Ele é     ${lista}`
        }
    }
    res.innerHTML += `O maior valor é ${pos}`

}