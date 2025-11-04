const formPromo = document.getElementById("form-cadastro");

formPromo.onsubmit = function(evento){
    evento.preventDefault();

    const desc = formPromo.querySelector("#id-prod").value.trim();
    const valorStr = formPromo.querySelector("#id-preco").value.replace(",", ".");
    const valor = parseFloat(valorStr);
    
    const valorPromo = valor / 2;        
    const valorTotal = (valor * 2) + valorPromo;

    const formatar = (v) => "R$ " + v.toFixed(2).replace(".", ",");

    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = `Promoção: Leve 3 ${desc}!`;
    p.innerHTML = `
        2 unidades por ${formatar(valor)} cada + 1 por ${formatar(valorPromo)}<br>
        <strong>Total: ${formatar(valorTotal)}</strong>
    `;

    document.querySelectorAll("h2, p").forEach(el => el.remove());
    document.body.appendChild(h2);
    document.body.appendChild(p);
};