<script setup>
import HeadwayLogo from '../components/HeadwayLogo.vue';
import NavigationLinks from '../components/NavigationLinks.vue';
import data from '../assets/dj.json';
</script>

<script>
export default {
    data() {
        return {
            currentBackground: 0
        }
    },
    computed: {
        galleryLinks() {
            return data.gallery;
        }
    }
}
</script>

<template>
    <!-- <h1>HEADWAY</h1> -->
    <HeadwayLogo></HeadwayLogo>
    <p>Previewversion</p>
    <NavigationLinks></NavigationLinks>

    <div class="gallery">
        
    </div>
</template>

<style scoped>
.gallery {
    /* background-color: green; */
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