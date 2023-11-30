<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
    data() {
        return {
            store,
        };
    },
    created(){
        
    },
    components: { AppHeader,AppMain },
    methods: {
        searchCommand() {
            axios
            .get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key:
                    "8d0af0e8c106b67078b532b5534ebd50",
                    query: store.searchText,
                }
            }).then((resp) => {
                console.log(resp);
                store.filmList = resp.data.results;
            })
        },
    },
};
</script>

<template>
    <AppHeader @performSearch="searchCommand"/>
    <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
