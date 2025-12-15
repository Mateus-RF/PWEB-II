import { buscarPokemon } from "./api.js";
import { mostrarLoading, mostrarErro, mostrarPokemon } from "./app.js";

document.getElementById("btnPesquisar").addEventListener("click", async () => {
  const nome = document.getElementById("pokemonInput").value;

  mostrarErro("");
  mostrarLoading(true);

  try {
    const pokemon = await buscarPokemon(nome);
    mostrarPokemon(pokemon);
  } catch (err) {
    mostrarErro(err.message);
  } finally {
    mostrarLoading(false);
  }
});
