<script>
export default {
    props: {
        artist: Object,
        index: Number
    }
}
</script>

<template>
    <RouterLink :to="{ name: 'details', params: { id: index } }">
        <div class="cell">
            <img :src="artist.pictureUrl">
            <div class="overlay">
                <span>

                    {{ artist.name }}
                </span>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
.cell .overlay {
    position: absolute;
    width: 100%;
    height: 100%;

    opacity: 0;

    display: grid;
    place-items: center;
    transition: all .2s linear;
}

.overlay span {
    background-color: black;
}

.cell:hover .overlay {
    opacity: 1;
}

.vignette {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 200px rgba(0,0,0,0.9) inset;
}

@keyframes inverter {
    0% {
        filter: blur(0) hue-rotate(0deg);
    }
    50% {
        filter: blur(00px) hue-rotate(0deg);

    }
    100% {
        filter: blur(0) hue-rotate(0deg);
    }
}

.cell:hover img {
    filter: grayscale(100%);
    transform: scale(1.2);

    animation-duration: .2s;
    animation-iteration-count: infinite;
}

.cell {
    width: 250px;
    height: 250px;
    position: relative;
    overflow: hidden;
}

.cell img {
    position: absolute;
    width: 100%;

    transition: all .2s linear;
}

@media (pointer: coarse) {
    /* For mobile phones: */

    .cell {
        width: 150px;
        height: 150px;
    }

    .cell .overlay {

        opacity: 1;
        display: flex;
        align-items: flex-end;
    }

    .cell .overlay span {
        display: block;
        width: 100%;
        background-color: rgba(0, 0, 0, 1);
        margin-bottom: 5px;
    }

    .cell:hover img {
        transform: unset;
    }
}
</style>