const formCadastro = document.getElementById("form-cadastro");


formCadastro.onsubmit = function(evento){
    evento.preventDefault();
    
    const valorStr = formCadastro.querySelector("#id-preco").value;
    const medicamento = formCadastro.querySelector("#id-med").value;
    const valor = parseFloat(valorStr.replace(",", ".")) * 2;

     const valorFinal = valor - (valor * 0.036);

    const p = document.createElement("p");
    p.textContent = `Promoção de ${medicamento}. Leve 2 por ${valorFinal.toFixed(2)}`;

    document.querySelectorAll("p").forEach(el => el.remove());
    document.body.appendChild(p);
};