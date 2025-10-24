const readline = require('readline-sync');
let n = parseInt(readline.question("Numero: "))

function fatorial(num){
    if(num < 0){return "numero invalido"};
    if(num === 0 || n ===1) return 1;
    return num * fatorial(num -1);
};


console.log(fatorial(n));