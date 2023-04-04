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
        <img :src="artist.pictureUrl">
        <span class="label">
            {{ artist.name }}
        </span>
    </RouterLink>
</template>

<style>
.cell {
    display: block;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 20vw; */
    height: 20vh;
}

.cell img {
    top: -25%;
    left: 0;

    width: auto;

    z-index: -1;
    transition: all .2s linear;
    position: absolute;
    filter: saturate(0%);

    max-width: 100%;

    min-width: 150px;
    min-height: 150px;

    width: 100%;
    height: auto;
    vertical-align: middle;
}

.cell:hover img {
    transform: scale(1.2);
    filter: saturate(100%);
}

.cell:hover .label {
    opacity: 1;
    /* display: block; */
}

.label {
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    display: block;
    opacity: 0;
    background-color: black;
    transition: all .2s linear;
}

.cell a:link span {
    color: white;
}

.cell a:visited span {
    color: white;
}
</style>