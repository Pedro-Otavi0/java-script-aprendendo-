/*
var n = [2,3,0,1,67]
n.sort()
console.log(n)

for (let c=0; c<n.length; c++){
    console.log(`A posição ${c} tem o valor ${n[c]}`)

}
    
   for(let c in n){
     console.log(n[c])
   }
*/
var numeros = []

var zeroAf = 0
var numeroDaTabuada = 8

do{
    zeroAf++

   var t = numeroDaTabuada*zeroAf
   numeros.push(t)
   
}while(zeroAf<10)
    console.log(numeros)
    console.log(numeros.typeof)
    

/*
var n = 0

while(n <= 10){
    n++
    numeros.push(t)
    console.log(numeros)
}
    */