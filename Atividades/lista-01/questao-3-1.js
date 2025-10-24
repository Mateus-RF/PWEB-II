function operacaoNumero(num1, num2, operator) {
    const a = Number(num1);
    const b = Number(num2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error('Entrada inválida: num1 e num2 devem ser números');
    }

    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
        case 'x':
        case 'X':
            result = a * b;
            break;
        case '/':
            if (b === 0) throw new Error('Divisão por zero não permitida');
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
        case '^':
            result = Math.pow(a, b);
            break;
        default:
            throw new Error('Operador inválido: use +, -, *, /, %, ** ou ^');
    }
    return result;
}

const valor = operacaoNumero(10, 5, "*");
console.log("Valor final: " + valor);