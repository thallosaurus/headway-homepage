<script>
export default {
    methods: {
        book() {
            this.$router.push("/booking?artist=" + this.$route.params.id)
        }
    },
    data() {
        return {
            currentArtistOld: this.$store.state.artists[0],
            artistId: this.$route.params.id
        }
    },
    computed: {
        currentArtist: function () {
            console.log("this", this);
            return this.$store.state.artists[this.artistId];
            // return this.$store.state.artists[this.$route.params.id];
        }
    }

}
</script>

<template>
    <template v-if="this.currentArtist">
        <p>
            <RouterLink to="/artists">&lt; Go back</RouterLink>
        </p>
        <div class="container">
            <img id="pic" :src="currentArtist.pictureUrl">

            <h1>
                {{ currentArtist.name }}
            </h1>
            <p>{{ currentArtist.desc }}</p>

            <h2>Socials:</h2>
            <ul>
                <li v-for="social in currentArtist.socials">
                    <a :href="social.href">{{ social.name }}</a>
                </li>
            </ul>
            <form @submit.stop.prevent="book()">
                <button class="fullwidth">Book me!</button>
            </form>
        </div>
    </template>
    <template v-else>
        <h1>
            Artist not found
        </h1>
        <RouterLink to="/artists">Go back</RouterLink>
    </template>
</template>

<style scoped>
.fullwidth {
    width: 100%;
}

#pic {
    float: left;
    width: 10em;
    /* height: 500px; */
    padding: 0 20px 20px 0;
}
</style>