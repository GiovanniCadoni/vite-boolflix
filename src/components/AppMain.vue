<script>
import { store } from "../store.js";
import AppCardProduct from "./AppCardProduct.vue";

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppCardProduct },
};
</script>
    
<template>
    <h2>Movies:</h2>
    <div v-for="(films) in store.filmList">
        <AppCardProduct :product="films" />
    </div>
    <h2>Serie tv:</h2>
    <div v-for="(series) in store.serieList">
        <AppCardProduct :product="series" />
    </div>
</template>

<style scoped lang="scss">
</style>