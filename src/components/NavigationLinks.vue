<script setup>

</script>

<template>
    <ul id="links">
        <li>
            <!-- <RouterLink to="" -->
            <RouterLink to="/about">about</RouterLink>
        </li>
        <li>
            <RouterLink to="/artists">artists</RouterLink>
        </li>
        <li>
            <RouterLink to="/sets">sets</RouterLink>
        </li>
        <li>
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
    background-color: black;
    padding: 4px;
    margin: .2em;
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