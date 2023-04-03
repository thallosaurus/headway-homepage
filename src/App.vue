<script setup>
import HelloWorld from './components/HelloWorld.vue'
import LandingPage from './pages/LandingPage.vue';
</script>

<script>
export default {
  computed: {
    showHeader() {
      return this.$route.name !== "landing";
    }
  }
}
</script>

<template>
  <header v-if="showHeader">
    <h1>Header</h1>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
/*.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/
</style>
