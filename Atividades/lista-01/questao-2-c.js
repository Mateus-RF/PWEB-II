const notaN1 = prompt("Digite a nota da N1: ");
const notaN2 = prompt("Agora a nota da N2: ");

const notaFinal = (Number(notaN1) * 2 + Number(notaN2) * 3) / 5;
let situacao;

if (notaFinal < 7){
    situacao = "Reprovado";
}else {;
    situacao = "Aprovado";
};

console.log("Voce ficou " + situacao + " na Materia, com nota " + notaFinal);