<script>
export default {
    props: {
        data: Object
    }
}
</script>

<template>
    <div class="row">
        <!-- Left Comp -->
        <div class="imgContainer">
            <img :src="data.promo">
        </div>
        <!-- Right Comp -->
        <div>
            {{ data.title }}
        </div>
    </div>
</template>

<style>
.row {
    display: grid;
    grid-template-columns: 0.25fr 0.75fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.imgContainer {
    height: 100%;
    /* background-color: green; */
}
</style>