<template>
  <Nav :setPagina="setPagina" />

  <Clipping v-if="pagina === 'blog'" />
  <Descricao v-if="pagina === 'descricao'" />
</template>

<script setup>
import { ref } from "vue";

import Nav from "@/components/Nav.vue";
import Descricao from "@/components/Descricao.vue";
import Clipping from "@/components/Clipping.vue";

const pagina = ref("blog");

function setPagina(valor) {
  pagina.value = valor;
}
</script>