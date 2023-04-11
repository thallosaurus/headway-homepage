<script>
export default {
    data() {
        return {
            selectedDj: this.$route.query.artist ?? -1,
            disabled: true  //not ready yet
        }
    },
    mounted() {
        // alert(this.selectedDj);
    }
}
</script>
<template>
    <h1>Booking</h1>
    <div>
        <span :class="{ 'closed': !disabled }">Booking is currently closed.</span>
    </div>
    <form :class="{ 'closed': disabled }">
        <div class="block">

            <label for="artist">DJ/Artist:</label>
            <select name="artist" v-model="selectedDj" required>
                <option disabled value="-1">-- None selected --</option>
                <option v-for="(dj, index) in this.$store.state.artists" :value="index">
                    {{ dj.name }}
                </option>
            </select>
        </div>

        <!-- <p> -->
        <div class="block">
            <label for="name">Name:</label>
            <input type="text" name="name" required>
        </div>

        <div class="block">
            <label for="email">E-Mail Address:</label>
            <input type="email" name="email" required>
        </div>

        <div class="block">
            <label for="message">Message:</label>
            <textarea name="message"></textarea>
        </div>

        <!-- <input type="submit"> -->
        <button v-if="!disabled">Send</button>
        <!-- </p> -->

        <!-- <p> -->

        <!-- </p> -->

    </form>
</template>

<style scoped>
span.closed {
    display: none;
}

.closed {
    pointer-events: none;
    filter: blur(10px);
    position: relative;
}

form {
    /* display: flex; */
}

button {
    width: 100%;
}

button:active {
    background-color: black;
    color: white;
}

form input,
form select {
    width: 100%;
    /* border: 2px solid white; */
    border: 2px solid transparent;
    border-bottom: 2px solid white;
    background-color: transparent;
    color: white;
    height: 3em;
    /* font-size: 24px; */
}

label .name {
    /* display: inline; */
}

/* form input {
    display: inline;
} */

textarea {
    background-color: transparent;
    border: 2px solid transparent;
    border-bottom: 2px solid white;
    color: white;
}

form select {
    height: 3em;
    border: 2px solid transparent;
    border-bottom: 2px solid white;
    background-color: transparent;
    color: white;
}

form select option {
    color: black;
}

.block {
    /* width: 49%; */
    /* display: inline-block; */
    margin: 1em 0;
    /* width: 100%; */
}

/* .right {
    float: right;
} */

label,
input {
    display: block;
}

textarea {
    width: 100%;
}
</style>