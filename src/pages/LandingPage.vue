<script setup>
import HeadwayLogo from '../components/HeadwayLogo.vue';
import NavigationLinks from '../components/NavigationLinks.vue';
import data from '../assets/data.json';
</script>

<script>
export default {
    data() {
        // console.log(this.$route.name);
        return {
            currentBackground: 0,
        }
    },
    computed: {
        galleryLinks() {
            // alert(this.$route.name);
            return data.gallery;
        }
    }
}
</script>

<template>
    <!-- <h1>HEADWAY</h1> -->
    <div class="container">

        <div class="box">

            <HeadwayLogo :showAnim="this.$route.name == 'landing'"></HeadwayLogo>
            <form v-if="!$store.state.cookiesAccepted" class="cookie-consent">
                <p>
                    we maybe use cookies.
                </p>
                <button type="submit" class="fullwidth" @click="$store.state.cookiesAccepted=true">Give me cookies!</button>
            </form>
            <NavigationLinks v-else></NavigationLinks>
        </div>
    </div>

    <div class="gallery">

    </div>
</template>

<style scoped>

.cookie-consent {
    text-align: center;
}

.cookie-consent button {

}
.container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: column;
    grid-template-areas:
        "."
        "text"
        ".";
    height: 90vh;
    padding: 0em !important;
}

.container .box {
    grid-area: text;
}

.gallery {
    background-color: transparent;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

p {
    text-align: center;
}

.gallery img {
    width: 100vw;
}

#links {
    /*     margin-block: 0;
    margin-inline: 0; */
    padding-inline: 0;
}

#links>li {
    display: inline-block;
    list-style-type: none;
}

ul>li {
    color: white;
    background-color: black;
}

ul>li:not(:first-child):not(:last-child)::before {
    content: "|";
    padding: 1em;
}

ul>li:not(:first-child):not(:last-child)::after {
    content: "|";
    padding: 1em;
}

ul>li:first-child {
    padding-left: 1em;
}

ul>li:last-child {
    padding-right: 1em;
}
</style>