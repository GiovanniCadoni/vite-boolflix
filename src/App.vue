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
            const params = {
                api_key: store.apiKey,
                query: store.searchText,
            };
            axios
            .get(`${store.baseUrl}/search/movie`, { params })
            .then((resp) => {
                store.filmList = resp.data.results;
            });
            axios
            .get(`${store.baseUrl}/search/tv`, { params })
            .then((resp) => {
                store.serieList = resp.data.results;
            });
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
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
