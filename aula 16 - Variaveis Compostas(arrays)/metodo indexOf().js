var a = [3,5,2,7,89,76]
var t = 89
var tma = Number(a.length)
if(a.indexOf(t) == -1){
    console.log(`Não encontramos o valor ${t}`)
}else{
  
        console.log(`O valor ${t} está na posição ${a.indexOf(t)}`)
    }