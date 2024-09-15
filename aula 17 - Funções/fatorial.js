/*
function fatorial(n){
    var fat = 1
    for (let c = n; c>1; c--){
        var t = fat *= c
        console.log(t)
    }
    return fat
    
}

console.log(fatorial(5))


//  5! = 5.4.3.2.1

function fatorial(n){
    var fat = 1
    for (let c = n; c>1; c--){
      fat *= c
    }
    return fat
}
console.log(fatorial(8))
*/
// 5! = 5.4!
// 5! = 5.(5-1)!
// n! = n.(n-1)!

function fatorial(n){
  if (n == 1){
    return 1
  }else{
    return n*fatorial(n-1)
  }
}

console.log(fatorial(5))