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
            artistId: this.$route.params.id,
            artistLabel: ""
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
        <RouterLink to="/artists">&lt; Go back</RouterLink>
        <!-- <p class="logo-container"> -->
        <h1>
            <div class="logo">
                {{ currentArtist.name }}
            </div>

        </h1>
        <!-- <img v-if="currentArtist.logoUrl" class="logo" :src="currentArtist.logoUrl"> -->
        <p class="genres">
            <span v-if="!currentArtist.subgenres">
                Techno
            </span>
            <span v-for="genre in currentArtist.subgenres" v-else>
                {{ genre }}
            </span>
        </p>
        
        <!-- </p> -->
        <div class="container">
            <!-- <img id="pic" :src="currentArtist.pictureUrl"> -->
            <img id="pic" :src="currentArtist.pictureUrl">
            <p class="text">

                <span>
                    {{ currentArtist.desc }}
                </span>

            <h2>Socials:</h2>
            <ul>
                <li v-for="social in currentArtist.socials" :class="'icon-' + social.icon ?? 'none'">
                    <a :href="social.href">{{ social.name }}</a>
                </li>
            </ul>
            </p>
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
.genres {
    text-align: center;
}

.genres>*:not(:first-child):before {
    /* color: green; */
    content: "●";
    margin: .5em;
}

.text {
    /* display: inline-block; */
}

.logo-container {
    border-bottom: 1px solid grey;
    margin-bottom: 25px;
    padding-bottom: 25px;
}

.fullwidth {
    width: 100%;
}

#pic {
    float: left;
    /* height: 500px; */
    padding: 0 20px 20px 0;
    max-width: 250px;
}

.nologo {
    width: 100%;
}

.logo {
    text-align: center;
    font-family: Pirulen;
}

.logo h1 {
    display: inline-block;
}

.social-widget {}

@media (pointer: coarse) {
    #pic {
        float: left;
        width: 35vw;
        /* height: 500px; */
        padding: 0 20px 20px 0;
        max-width: 250px;
    }
}
</style>