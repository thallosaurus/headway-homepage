<script setup>
import NavigationLinks from './components/NavigationLinks.vue';
import HeadwayLogo from './components/HeadwayLogo.vue';
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
    <RouterLink to="/">
        <HeadwayLogo></HeadwayLogo>
    </RouterLink>
    <NavigationLinks></NavigationLinks>
  </header>

  <div class="padding">

    <RouterView></RouterView>
    
    <footer v-if="showHeader">
      <p>(c) 2023 Headway Kollektiv</p>
    </footer>
  </div>
</template>

<style scoped>
.padding {
  padding: 1em;
}
h1.logo {
  text-align: center;
}

footer {
  /* position: absolute; */
  bottom: 25px;
  padding: 2em 0;
  text-align: center;
}

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
