
import { calcularMedia, VALOR_PI } from "./utils/calculadora.js";

import buscarDados from "./services/dados.js";

async function main() {
  console.log("Iniciando aplicação...");

  const dados = await buscarDados();

  const media = calcularMedia(dados);

  console.log("Dados recebidos:", dados);
  console.log("Média calculada:", media);
  console.log("Valor de PI importado:", VALOR_PI);
}

main();

/**
 * 
Para que o navegador aceite import/export, seu script precisa ser um módulo ES6.

No HTML:
    <script type="module" src="app.js"></script>

Permite usar import e export e faz o navegador carregar arquivos externos como módulos.
 */
