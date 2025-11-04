const formPromo = document.getElementById("form-cadastro");

formPromo.onsubmit = function(evento){
    evento.preventDefault();

    const valor = formPromo.querySelector("#id-value").value;
    const tempo = formPromo.querySelector("#id-time").value;
    
    const blocos = Math.ceil(tempo / 15); 
    const valorTotal = blocos * valor;


    const p = document.createElement("p");
    p.textContent = `Valor total a pagar: R$ ${valorTotal.toFixed(2).replace(".", ",")}`;

    document.querySelectorAll("p").forEach(el => el.remove());
    document.body.appendChild(p);
};