const element = document.getElementById("teste");
const button = document.getElementById("button");

let colorDark = "#30025aff";
let colorLight = "#d2bee4ff";
let isDark = true;

element.style.color = colorDark;
element.textContent = "Texto no navegas"

button.onclick = function styleElement() {
    if (isDark) {
        element.style.color = colorLight;
    } else {
        element.style.color = colorDark;
    }
    isDark = !isDark;
}

const form = document.getElementById("form-inputs");
const results = document.getElementById("results")

form.onsubmit = function(event){
    event.preventDefault();

    const name = form.querySelector("#input-name").value;
    const email = form.querySelector("#input-email").value;

    results.innerHTML = `Nome: ${name}<br>Email: ${email}`;
}