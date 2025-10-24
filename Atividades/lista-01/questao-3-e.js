const readline = require('readline-sync');

const produtos = {
    "camisa" : 45.00,
    "short" : 65.00,
    "moletom" : 120.00,
    "calça" : 85.00
};

let qtd = {
    "camisa" : 0,
    "short" : 0,
    "moletom" : 0,
    "calça" : 0
};

console.log(produtos)
while(true){
    let n = readline.question("Numero: ");
    if (n === "sair") {
        break;
    }
    switch (n){ 
        case "camisa":
            qtd["camisa"] += 1;
            break;
        case "short": 
            qtd["short"] += 1;
            break;
        case "moletom":
            qtd["moletom"] += 1;
            break;
        case "calça": 
            qtd["calça"] += 1;
            break;

        default:
            console.log("Não se encaixa em nada baiano !!!");
            break;
    };
}

let valorTotalBruto = 0
for (let item in produtos) {
    valorTotalBruto += produtos[item] * qtd[item]; 
}
let descontoPercentual = parseFloat(readline.question("\nTu quer Desconto? Se não, coloque 0 (ex: 10 para 10%): "));

if (isNaN(descontoPercentual) || descontoPercentual < 0 || descontoPercentual > 100) {
    descontoPercentual = 0;
}

const valorDesconto = valorTotalBruto * (descontoPercentual / 100);
const valorFinal = valorTotalBruto - valorDesconto;

console.log("\n--- RESUMO DA COMPRA ---");
console.log("Valor Bruto: R$ " + valorTotalBruto.toFixed(2));
console.log("Desconto Aplicado: " + descontoPercentual.toFixed(0) + "% (R$ " + valorDesconto.toFixed(2) + ")");
console.log("Valor Final a Pagar: R$ " + valorFinal.toFixed(2));