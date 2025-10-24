const valorReal = read("Digite um valor em Real R$: ");
const contacaoDolar = prompt("Digite o valor da cotaçao em Dolar: ");

const valorConvertidoDolar = Number(valorReal) / Number(contacaoDolar);

console.log("O valor em Dolar $:", valorConvertidoDolar.toFixed(2));