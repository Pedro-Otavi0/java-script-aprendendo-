    function calcular() {
        var numTabuada = document.querySelector("#numero")
        var tab = document.querySelector("#seltab")
        if (numTabuada.value == ''){
            window.alert("Coloque o número para calcular a tabuada")
        }else{
            var n = Number(numTabuada.value)
            var a = 0
            tab.innerHTML=''
            do{
                 let item = document.createElement('option')
                 item.text = `${n} x ${a} = ${n*a}`
                 tab.appendChild(item)
                 
                 a++
            }while(a<=10)
             
                

        }
    }
