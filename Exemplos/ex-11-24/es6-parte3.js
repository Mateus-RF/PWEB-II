// Nullish Coalescing Operator (Coalescencia Nula)

const nome = null;
const nomeValido = nome ?? "Convidado";
console.log(nomeValido); // Convidado

const pessoa = {
    nome: "João",
    idade: 30,
    endereco: null 
}


console.log(pessoa.endereco ?? "Sem endereço")
console.log(pessoa.endereco?.logradouro)
