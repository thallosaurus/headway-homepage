<script>
</script>

<template>
    <h1>HEADWAY</h1>
    <p>Coming soon I think</p>
    <ul id="links">
        <li>
            <RouterLink to="/about">about</RouterLink>
        </li>
        <li>
            <RouterLink to="/about">about 2</RouterLink>
        </li>
        <li>
            <RouterLink to="/artists">artists</RouterLink>
        </li>
    </ul>
</template>

<style scoped>
#links {
/*     margin-block: 0;
    margin-inline: 0; */
    padding-inline: 0;
}

#links>li {
    display: inline-block;
    list-style-type: none;
}

ul > li {
    color: white;
    background-color: black;
}

ul > li:not(:first-child):not(:last-child)::before {
    content: "|";
    padding: 1em;
}

ul > li:not(:first-child):not(:last-child)::after {
    content: "|";
    padding: 1em;
}

ul > li:first-child {
    padding-left: 1em;
}

ul > li:last-child {
    padding-right: 1em;
}
</style>