const formCadastro = document.getElementById("form-cadastro");


formCadastro.onsubmit = function(evento){
    evento.preventDefault();
    
    const valorStr = formCadastro.querySelector("#id-preco").value;
    const medicamento = formCadastro.querySelector("#id-med").value;
    const valor = parseFloat(valorStr.replace(",", ".")) * 2;

     const valorFinal = valor - (valor * 0.036);

    const p = document.createElement("p");
    p.textContent = ` Leve 2 por ${valorFinal.toFixed(2)}`;
    p.innerHTML = `
    <strong style="font-size: 28px;">Promoção de ${medicamento}.</strong><br><br>
     Leve 2 por ${valorFinal.toFixed(2)}
    `;

    document.querySelectorAll("p").forEach(el => el.remove());
    document.body.appendChild(p);
};