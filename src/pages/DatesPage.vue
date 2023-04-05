<script setup>
import DatesComponent from '../components/DatesComponent.vue';
</script>

<template>
    <h1>Dates</h1>
    <DatesComponent v-for="date in $store.state.dates" :data="date"></DatesComponent>
</template>