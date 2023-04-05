<script setup>
// import djs from '../assets/dj.json';
import NewArtistCell from '../components/NewArtistCell.vue';
// console.log(djs);
</script>

<script>
export default {
    computed: {
        artists() {
            let a = this.$store.state.artists.map((value, index) => {
                return {
                    artist: value,
                    index: index
                }
            });

            console.log(a)

            return a.sort((a, b) => {
                return Math.random() > 0.5 ? 1 : -1;
            });
        }
    },
    components: { NewArtistCell }
}
</script>

<template>
    <h1>Artists</h1>
    <!-- Grid here -->
    <div class="grid">
        <NewArtistCell v-for="entry in artists" :index="entry.index" :artist="entry.artist"></NewArtistCell>
    </div>
</template>

<style scoped>
.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /*

    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    /*
    grid-template-rows: 1fr 1fr 1fr;

    gap: 0px 0px; */
    align-content: start;

}

.grid > * {

}

@media (pointer: coarse) {
    /* For mobile phones: */

    .grid {}

    .grid>* {
        padding: 0;
    }
}
</style>