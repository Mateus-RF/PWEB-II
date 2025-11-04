/** 
 * Aula sobre Estruturas de Repetição
 * Data 21/10/2025
 */
const alunos = ["guilherme", "saul", "lupercio", "rosimeire"]

// for of
for (let aluno of alunos) {
    console.log(aluno)
}

// function
function imprimir(valor){
    console.log(valor)
}

// forEach() itera um array, chamando uma funcao para o 

alunos.forEach(imprimir)

/**
 *  Repetição de objetos
 */

const escola = {
    nome : "IFCE",
    endereco : "Rua Antonio Teixeira Benevides, 01, Colibris",
    qtdAlunos : 500,
    CNPJ : "10.744.098/0015-40",
    reitor : "Alan SOmbra", 
    cursos : ["ADS", "Telematica", "Letras", "Informatica pra Internet", "Agropecuaria", "Rades"]
}
// for in percorre propriedades de objetos
for (let dados in escola){
    console.log(escola[dados])
}

