export function mostrarLoading(mostrar) {
  document.getElementById("loading").style.display = mostrar ? "block" : "none";
}

export function mostrarErro(msg) {
  document.getElementById("erro").textContent = msg;
}

export function mostrarPokemon(pokemon) {
  const div = document.getElementById("resultado");

  div.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <ul>
      <li>Altura: ${pokemon.height}</li>
      <li>Peso: ${pokemon.weight}</li>
      <li>Tipo: ${pokemon.types.map(t => t.type.name).join(", ")}</li>
    </ul>
  `;
}
