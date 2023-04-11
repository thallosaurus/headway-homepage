<script>
export default {
    props: {
        links: Object
    }
}
</script>

<template>
    <h2>Socials:</h2>
    <ul>
        <li v-for="social in links" :class="'icon-' + social.icon ?? 'none'" class="icon">
            <a :href="social.href">{{ social.name }}</a>
        </li>
    </ul>
</template>

<style scoped>

</style>