<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
        };
    },
    emits: ["performSearch"],
};
</script>

<template>
    <div class="mb-3">
        <input type="search" class="form-control" placeholder="Search a movie or serie tv:"
        v-model.trim="store.searchText">
    </div>
    <button @click="$emit('performSearch')" type="button" class="btn btn-primary">Search</button>

</template>

<style scoped lang="scss">
</style>