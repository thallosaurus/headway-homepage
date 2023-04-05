<script>
export default {
    props: {
        data: Object,
        index: Number
    },
    computed: {
        humandate() {
            let d = new Date();

            //Converts Seconds to rough Milliseconds
            d.setTime(this.data.ts * 1000);
            let str = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`
            return str;
        }
    }
}
</script>

<template>
    <div class="row big">
        <!-- Left Comp -->
        <div class="imgContainer">
            <img :src="data.promo">
        </div>
        <!-- Right Comp -->
        <div>
            <h2>
                {{ data.title }}
            </h2>
            <p>
                {{ humandate }} @ {{ data.where }}
            </p>
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin: 0;
}
.big {
    height: 10em !important;
    grid-template-columns: 10em 1fr;
}

.row {
    display: grid;
    grid-template-rows: 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 0px;
    height: 2em;
}

.imgContainer {
    background-color: green;
    height: 10em;
    width: 10em;
    overflow: hidden;
}

img {
    height: 10em;
    /* height: ; */
    /* background-color: green; */
}
</style>