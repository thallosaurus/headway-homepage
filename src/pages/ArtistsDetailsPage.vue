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
            return this.$store.state.artists[this.artistId];
        }
    }

}
</script>

<template>
    <template v-if="this.currentArtist">
    <p>
        <RouterLink to="/artists">&lt; Go back</RouterLink>
    </p>
    <h1>
        <img v-if="currentArtist.logoUrl" class="logo" :src="'/' + currentArtist.logoUrl">
        <div class="nologo" v-else>
            {{ currentArtist.name }}
        </div>
    </h1>





            <div class="container">
                <img id="pic" :src="currentArtist.pictureUrl">
            
            

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

.logo {
    width: 100%;
    display: inline-block;
}

.nologo {
    text-align: center;
    font-family: Pirulen;
}
</style>