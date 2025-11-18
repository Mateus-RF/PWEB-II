// 22 - Validação funcional com DOM
const formulario = document.getElementById("id-formCadastro");

formulario.onsubmit = function(evento){
    evento.preventDefault();

    const p = {
        nome : formulario.querySelector("#id-nome").value,
        preco : Number(formulario.querySelector("#id-preco").value),
        categoria :  formulario.querySelector("#id-cat").value
    };
    const resultado = validarProd(p);

    addListErro(resultado);
}

function addListErro(array){
    if(array.ok){
        return
    }
    document.querySelectorAll("div").forEach(el => el.remove());

    divErros = document.createElement("div");
    divErros.id = "erros";
    formulario.insertAdjacentElement("afterend", divErros);

    const ul = document.createElement("ul");

    array.erros.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    });

    divErros.appendChild(ul);
    divErros.classList.toggle("error", !array.ok);
}


function validarProd(p){
    const result = {
        "ok" : true,
        "erros" : []
    };

    if (!p.nome || p.nome.trim() === "") {
        result.erros.push("Nome não pode ser vazio");
    }

    if (p.preco == null || p.preco <= 0) {
        result.erros.push("Preço deve ser maior que 0");
    }

    if (!p.categoria || p.categoria.trim() === "") {
        result.erros.push("Categoria não pode ser vazia");
    }

    if (result.erros.length > 0) {
        result.ok = false;
    }

    return result
}