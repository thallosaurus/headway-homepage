<script setup>
import djs from '../assets/dj.json';
// console.log(djs);
</script>

<script>
export default {
    computed: {
        currentArtist() {
            return djs.artists[this.$route.params.id];
        }
    }
}
</script>

<template>
    <template v-if="this.currentArtist">
        <div class="container">
            <img id="pic" :src="this.currentArtist.pictureUrl">

            <h1>
                {{ currentArtist.name }}
            </h1>
            <p>{{ currentArtist.desc }}</p>
        </div>
            
        <h2>Socials:</h2>
        <ul>
            <li v-for="social in this.currentArtist.socials">
            <a :href="social.href">{{ social.name }}</a>
            </li>
        </ul>
    </template>
    <template v-else>
        <h1>
            Artist not found
        </h1>
        <RouterLink to="/artists">Go back</RouterLink>
    </template>
</template>

<style scoped>
#pic {
    float: left;
    width: 8em;
}
</style>