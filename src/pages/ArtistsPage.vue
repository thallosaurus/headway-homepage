<script setup>
import djs from '../assets/dj.json';
import ArtistCell from '../components/ArtistCell.vue';
// console.log(djs);
</script>

<script>
export default {
    computed: {
        artists() {
            return djs.artists;
        }
    },
    components: { ArtistCell }
}
</script>

<template>
    <h1>Artists</h1>
    <!-- Grid here -->
    <div class="grid">
        <ArtistCell v-for="(artist, index) in artists" :index="index" :artist="artist"></ArtistCell>
    </div>
</template>

<style scoped>
.grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    /*
    grid-template-rows: 1fr 1fr 1fr;
    */
    gap: 20px 20px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>