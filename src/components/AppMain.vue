<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
        };
    },
};
</script>
    
<template>
    <div v-for="(film) in store.filmList">
        <h3>{{ film.title }}</h3>
        <h4>{{ film.original_title }}</h4>
        <p>{{ film.original_language }}</p>
        <p>{{ film.vote_average }}</p>
    </div>
</template>

<style scoped lang="scss">
</style>