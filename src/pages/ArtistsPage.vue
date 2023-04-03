<script setup>
import djs from '../assets/dj.json';
// console.log(djs);
</script>

<script>
export default {
    computed: {
        artists() {
            return djs.artists;
        }
    }
}
</script>

<template>
    <h1>Artists</h1>
    <!-- Grid here -->
    <div class="grid">
        <RouterLink :to="{ name: 'artistdetails', params: { id: index } }" class="cell" v-for="(artist, index) in artists">
            <img :src="artist.pictureUrl">
            <span class="label">
                {{ artist.name }}
            </span>
        </RouterLink>
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
    gap: 20px 20px;
    */
}

.cell {
    display: block;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 20vh;
}

.cell img {
    top: 0;
    left: 0;

    width: auto;

    z-index: -1;
    transition: all .2s linear;
    position: absolute;
    filter: saturate(0%);

    width: 100%;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
}

.cell:hover img {
    transform: scale(1.2);
    filter: saturate(100%);
}

.label {
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    display: block;
    background-color: black;
}
</style>