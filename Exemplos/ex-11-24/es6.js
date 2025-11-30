pessoa = {
    nome: 'João',
    idade: 30,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    }
}
// Desestruturando o objeto pessoa
const { idade, endereco } = pessoa;
console.log(idade); // João

let a = 5;
let b = 10;

// Troca de valores sem desestruturação
// let temp = a;
// a = b;
// b = temp;

// Troca de valores com desestruturação
[a, b] = [b, a];
console.log(a);

// Rest operator
const {nome, ...resto} = pessoa;

console.log(resto); // { idade: 30, endereco: { cidade: 'São Paulo', estado: 'SP' } }

let numeros = [1,2,3,4,5,6]

const [n1, n2, ...restoNum] = numeros;

console.log(restoNum); // [3,4,5,6]

function restFunction(valorInicial, ...valores){
    return valores.reduce((acc, valor) => acc + valor, 0)
}