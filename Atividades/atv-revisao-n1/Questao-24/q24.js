const vendas = [
  { produto: "Notebook", preco: 3500, quantidade: 1, status: "pago" },
  { produto: "Mouse", preco: 50, quantidade: 3, status: "pendente" },
  { produto: "Teclado", preco: 150, quantidade: 2, status: "pago" },
  { produto: "Monitor", preco: 1200, quantidade: 1, status: "pago" },
  { produto: "Webcam", preco: 80, quantidade: 5, status: "pendente" },
];

const pipe = (...fns) => (valorInicial) =>
    fns.reduce((acc, fn) => fn(acc), valorInicial);

const filterVendasPagas = vendas =>
    vendas.filter(v => v.status === "pago");

const mapTotalItem = vendasPagas =>
    vendasPagas.map(v => v.preco * v.quantidade);

const reduceTotalGeral = totais =>
    totais.reduce((acc, val) => acc + val, 0);

const exibirTotalGeral = total => {
    document.querySelector("#totalGeral")
        .textContent = "Total das vendas pagas: R$ " + total.toFixed(2);
};

const lista = document.querySelector("#listaVendas");
vendas.forEach(v => {
    const li = document.createElement("li");
    li.textContent = `${v.produto} - R$${v.preco} x ${v.quantidade} (${v.status})`;
    lista.appendChild(li);
});

const calcularReceita = pipe(
    filterVendasPagas,
    mapTotalItem,
    reduceTotalGeral,
    exibirTotalGeral
);

document.querySelector("#calcularReceitaTotal")
        .addEventListener("click", () => calcularReceita(vendas));