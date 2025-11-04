/**
 * Aula sobre arrays, objetos e funcöes
 */
const carrinho = [
    {
        id: "PRD01",
        nome: "Mouse sem Fio",
        preco : 10.00,
        qtd : 2
    },
    {
        id: "PRD02",
        nome: "Mouse sem Fio",
        preco : 10.00,
        qtd : 1
    },
    {
        id: "PRD3",
        nome: "Teclado sem fio AULA",
        preco : 300.00,
        qtd : 3
    },
]

function valorTotal(carrinho){
    const valorTotal = 0
    for (let a = 0; a <3; a++){
        const qtd = carrinho.qtd[a]
        const valor = carrinho.preco

        console.log(typeof qtd)
    }
    console.log(valorTotal)
}


carrinho.forEach(valorTotal)
