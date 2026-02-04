<template>
  <div class="clipping">
    <h2>Últimas do Blog</h2>

    <a
      href="https://programadoresdepre.com.br/30-atalhos-no-vs-code-para-turbinar-sua-produtividade/"
      target="_blank"
      rel="noopener noreferrer"
    >
      30 atalhos no VS Code para turbinar sua produtividade
    </a>
    <p>
      Neste artigo, você vai descobrir 30 atalhos essenciais do VS Code que
      vão turbinar sua produtividade.
    </p>

    <a
      href="https://programadoresdepre.com.br/o-que-e-opencode-uma-explicacao-sem-hype/"
      target="_blank"
      rel="noopener noreferrer"
    >
      O que é OpenCode? Uma explicação sem hype
    </a>
    <p>
      Enquanto ferramentas como Claude Code (da Anthropic) são closed source e
      o Codex (da OpenAI) tem seus vieses naturais, o OpenCode nasceu da
      comunidade, com o código aberto, para ser um agente de programação neutro.
    </p>

    <a
      href="https://programadoresdepre.com.br/por-que-usar-node-js-para-backend-vantagens-uso-e-como-comecar/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Por que usar Node.js para backend
    </a>
    <p>
      A ideia aqui é mostrar o conceito, as vantagens reais, os casos onde ele
      se encaixa melhor e também quando não é a melhor escolha.
    </p>

    <a
      href="https://programadoresdepre.com.br/os-6-principais-recursos-do-react/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Os 6 principais recursos do React
    </a>
    <p>
      Neste artigo, exploraremos os seis principais recursos do React que
      podem verdadeiramente transformar a sua abordagem ao desenvolvimento.
    </p>
  </div>
</template>

<script setup>
/* componente estático — sem lógica */
</script>

<style scoped>
.clipping {
  text-align: left;
  margin-left: 35rem;
  width: 550px;
}

h2 {
  margin-top: 60px;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 50px;
}

.clipping a {
  display: flex;
  font-size: 24px;
  font-weight: 500;
  margin: 15px 0;
  text-decoration: none;
  color: aliceblue;
}

.clipping a:hover {
  text-decoration: underline;
}

.clipping p {
  font-size: 14px;
  font-style: italic;
  color: gray;
}
</style>
