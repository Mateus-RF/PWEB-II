<template>
  <main class="descricao">
    <h1>Sobre o Blog</h1>

    <p>
      Este blog foi criado com o objetivo de compartilhar conhecimento de
      forma clara, direta e sem hype. Aqui você encontra conteúdos voltados
      para desenvolvimento de software, tecnologia e boas práticas do dia a
      dia.
    </p>

    <p>
      Os artigos abordam temas como programação, ferramentas modernas,
      produtividade, backend, frontend e conceitos atuais do ecossistema tech,
      sempre com foco em aprendizado prático.
    </p>

    <p>
      A seção de <strong>Clipping</strong> reúne links externos selecionados,
      servindo como curadoria de conteúdos relevantes publicados na mídia
      especializada.
    </p>

    <p class="assinatura">
      Conteúdo feito para quem aprende na prática 🚀
    </p>

    <p class="assinatura">
      Detalhe o texto por IA e ficar devendo a Página Sobre
    </p>
  </main>
</template>

<script setup>
/* componente puramente visual — não precisa de lógica */
</script>

<style scoped>
.descricao {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.descricao h1 {
  font-size: 36px;
  margin-bottom: 24px;
}

.descricao p {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.assinatura {
  margin-top: 32px;
  font-size: 18px;
  font-style: italic;
  color: #555;
}
</style>
