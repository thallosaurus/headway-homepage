<script>
export default {
    props: {
        artist: Object,
        index: Number
    }
}
</script>

<template>
    <RouterLink :to="{ name: 'artistdetails', params: { id: index } }" class="cell">
        <img class="artist" :src="artist.pictureUrl">
        <span class="label">
            <img v-if="artist.logoUrl" class="logo" :src="artist.logoUrl">
            <span class="nologo" v-else>
                {{ artist.name }}
            </span>
        </span>
    </RouterLink>
</template>

<style scoped>
/*
.cell {
    display: block;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 20vw; *
    width: 500px;
    height: 500px;
}

.cell:hover {
    text-decoration: none;
}

 @media (pointer: fine) { *

    .cell img.artist {
        *top: -25%;*


        width: auto;

        z-index: 1;
        transition: all .2s linear;
        position: absolute;
        filter: saturate(100%);

        max-width: 100%;

        min-width: 150px;
        min-height: 150px;

        width: 100%;
        vertical-align: middle;
    }

    .cell:hover img.artist {
        transform: scale(1.2);
        filter: saturate(0%);
    }

    .cell:hover .label {
        opacity: 1;
    }

    .cell:focus img.artist {
        transform: scale(1.2);
        filter: saturate(0%);
    }

    .cell:focus .label {
        opacity: 1;
        * display: block; 
    }

    .label {
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        font-size: 24px;
        display: block;
        opacity: 0;
        transition: all .2s linear;
        z-index: 2;
    }
    
    .label .nologo {
        
        background-color: black;
         font-family: Pirulen; *
        width: 100%;
    }

    .label .logo {
        width: 100%;
        background-color: black;
    }
 } */

.cell a:link span {
    color: white;
}

.cell a:visited span {
    color: white;
}
</style>