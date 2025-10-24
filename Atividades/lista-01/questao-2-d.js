let somaTotal = 0;

function isPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const limite = Math.sqrt(num);
    for (let divisor = 3; divisor <= limite; divisor += 2) {
        if (num % divisor === 0) {
            return false; 
        }
    }
    return true;
}

while (true) {
    let numInput = prompt("Digite um numero (ou 'sair' para finalizar): ");

    if (numInput === "sair") {
        break;
    }
    let numero = Number(numInput);

    if (isPrimo(numero)) {
        somaTotal += numero;
        console.log("${numero} é primo. Soma atual: ${somaTotal}");
    }
}

console.log("Soma Total: ${somaTotal}");