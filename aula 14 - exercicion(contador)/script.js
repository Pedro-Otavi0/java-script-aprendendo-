

function contar(){
   let inicio = document.getElementById("inicio")
   let fim = document.getElementById("fim")
   let passo = document.getElementById("passo")
   let res =document.querySelector("#res")

   
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      window.alert("falta dados")
   

   }else {
      let i = Number(inicio.value)
      let f = Number(fim.value)
      let p = Number(passo.value)

      
         
         if (i > f){
            for(var c = i; c >= f; c -= p)
               document.querySelector("#res").innerHTML += ` ${c}`
         }
         
         for(var c = i; c <= f; c += p){
         document.querySelector("#res").innerHTML += ` ${c}`
      }
     
   }
  }
