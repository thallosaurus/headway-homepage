<template>
    <h1>404 - Page not found</h1>
    <p class="center">
        <RouterLink to="/">&lt; Go to homepage</RouterLink>
    </p>

    <div class="container">
        <img src="404.jpg">
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.container img {
    width: 70%;
}

.center {
    text-align: center;
}
</style>