let filmes = [];

function addDelegatedEventListener(parent, type, selector, handler) {
    parent.addEventListener(type, function(event) {
        const potentialElements = parent.querySelectorAll(selector);
        const target = event.target;

        for (let elem of potentialElements) {
            if (elem === target) {
                handler(event);
                break;
            }
        }
    });
}

const inputFilme = document.getElementById("inputFilme");
const btnAdd = document.getElementById("btnAdd");
const lista = document.getElementById("listaFilmes");
const inputFiltro = document.getElementById("inputFiltro");

btnAdd.addEventListener("click", () => {
    const nome = inputFilme.value.trim();
    if (nome === "") return;

    filmes.push(nome);
    renderLista();
    inputFilme.value = "";
});

addDelegatedEventListener(lista, "click", ".btn-remover", function(event) {
    const li = event.target.closest("li");
    const nomeFilme = li.dataset.nome;

    filmes = filmes.filter(f => f !== nomeFilme);

    li.remove();
});

inputFiltro.addEventListener("input", () => {
    const texto = inputFiltro.value.toLowerCase();

    Array.from(lista.children).forEach(li => {
        const nome = li.dataset.nome.toLowerCase();
        li.classList.toggle("hidden", !nome.includes(texto));
    });
});

function renderLista() {
    lista.innerHTML = "";
    filmes.forEach(filme => {
        const li = document.createElement("li");
        li.dataset.nome = filme;
        li.innerHTML = `
            ${filme}
            <button class="btn-remover">remover</button>
        `;
        lista.appendChild(li);
    });
}