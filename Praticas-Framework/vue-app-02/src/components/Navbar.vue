<template>
  <nav>
    <ul>
      <li>
        <a href="#" @click.prevent="mudarPagina('blog')">
          Blog
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="mudarPagina('sobre')">
          Sobre
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="mudarPagina('descricao')">
          Descrição
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const emit = defineEmits(["setPagina"]);

function mudarPagina(pagina) {
  emit("setPagina", pagina);
}
</script>

<style scoped>
nav {
  display: flex;
  overflow: hidden;
  justify-content: center;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav ul li {
  padding: 14px 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

nav ul li a:hover {
  background-color: #575757;
}
</style>
