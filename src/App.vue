<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://telefunc.com/" target="_blank">
      <img src="./assets/telefunc.svg" class="logo telefunc" alt="Telefunc logo" />
    </a>
    <a href="https://vueuse.org/" target="_blank">
      <img src="./assets/vueuse.svg" class="logo vueuse" alt="VueUse logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + Telefunc + VueUse" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.telefunc:hover {
  filter: drop-shadow(0 0 2em #c9ac2eaa);
}
.logo.vueuse:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
