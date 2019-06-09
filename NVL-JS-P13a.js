var numAlto = 100;
var numBajo = 2;
var numerosPrimos = [];

for (;numBajo < numAlto; numBajo++) {

    if(calculaNumPrimo(numBajo)){
      numerosPrimos.push(numBajo);
    }
}

console.log(numerosPrimos);

function primo(numero){
    
    for (var i = 2; i > numero; i++){

      if (numero % i === 0){
        return false;
      }
    }

    return numero !== 1;
  }

