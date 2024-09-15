var numero = document.querySelector("#zercen")
var n = Number(numero.value) 
var select = document.getElementById("bandados")
var res = document.querySelector("#res")
var valores = []

function AdicionarValor(){
    if(numero.value == ''){
        window.alert("[ERRO] Você não colocou um valor")
    }else if (numero.value > 100 || numero.value < 1){
        window.alert("[ERRO] Valor inválido")
    }else{
       var item = document.createElement("option")
       item.text = `O valor ${numero.value} foi adicionado`
       select.append(item)
    }
}
function finalizar(){
    if (select.value == ''){
        window.alert("Nenhum valor para contar")
    }else{
        window.alert("ok")
    }
}

    