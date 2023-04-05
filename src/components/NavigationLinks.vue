<script>
export default {
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    }
}
</script>

<template>

    <ul id="links">
        <li :class="{ selected: currentRoute == 'about' }">
            <!-- <RouterLink to="" -->
            <RouterLink to="/about">about</RouterLink>
        </li>
        <li :class="{ selected: currentRoute == 'artists' }">
            <RouterLink  to="/artists">artists</RouterLink>
        </li>
        <li :class="{ selected: currentRoute == 'dates' }" >
            <RouterLink to="/dates">dates</RouterLink>
        </li>
        <li :class="{ selected: currentRoute == 'sets' }" >
            <RouterLink to="/sets">sets</RouterLink>
        </li>
        <li :class="{ selected: currentRoute == 'booking' }" >
            <RouterLink to="/booking">booking</RouterLink>
        </li>
    </ul>
</template>

<style scoped>
#links {
    /*     margin-block: 0;
    margin-inline: 0; */
    padding-inline: 0;
    text-align: center;
}

#links>li {
    display: inline-block;
    list-style-type: none;
}

ul>li {

    color: white;
    padding: 4px;
    margin: .2em;
}

.selected {
    color: black !important;
    background-color: white;
}

.selected a:link {
  color: black;
}

.selected a:visited {
  color: black;
}

/* ul>li:not(:first-child):not(:last-child)::before {
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
} */
</style>