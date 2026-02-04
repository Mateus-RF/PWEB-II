<template>
  <div class="nav-container">
    <!-- Navbar -->
    <Navbar @setPagina="setPagina" />

    <!-- Perfil -->
    <div class="profile">
      <img :src="avatar" alt="Avatar" class="avatar" />

      <div class="profile-text">
        <p id="name">Mateus Ribeiro</p>
        <p id="descricao-persona">
          Sou Mateus Ribeiro, desenvolvedor em formação com forte interesse em
          desenvolvimento de software e tecnologia aplicada à resolução de
          problemas reais. Tenho experiência com programação em Python, Java,
          Kotlin e JavaScript, além de desenvolvimento web com React e
          aplicações mobile Android. Já desenvolvi projetos envolvendo bancos
          de dados (SQLite/Room), APIs, arquitetura de software, padrões de
          projeto, além de sistemas com foco em organização, desempenho e boa
          experiência do usuário.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import avatar from "@/assets/baixados.jpeg";

defineProps({
  setPagina: {
    type: Function,
    required: true
  }
});
</script>

<style scoped>
.nav-container {
  background-color: #2f568a;
  padding: 10px 350px;
}

.nav-container nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

/* Área do perfil */
.profile {
  display: flex;
  align-items: flex-start;
  gap: 100px;
  width: 1100px;
}

/* Avatar à esquerda */
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

#name {
  font-size: 32px;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 20px;
}

#descricao-persona {
  font-size: 18px;
  line-height: 1.7;
  color: #dbe6f5;
}
</style>
