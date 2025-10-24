let array = []
const readline = require('readline-sync');
while(true){
    let n = readline.question("Numero: ");
    if (n === "sair") {
        break;
    }
    array.push(Number(n))
}

function arrayImpares(array){
    let arrayImpar = []
    for(let num of array){
        if(num % 2 != 0){
            arrayImpar.push(num);
        };
    };
    return arrayImpar;
}

console.log(arrayImpares(array))