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
    <div class="ms_container">
        <div class="ms_schedule mb-5">
            <h2 class="text-danger">Movies:</h2>
            <div class="row row-cols-5">
                <div class="col g-4" v-for="(films) in store.filmList">
                    <AppCardProduct :product="films" />
                </div>
            </div>
        </div>
        <div class="ms_schedule">
            <h2 class="text-danger">Serie tv:</h2>
            <div class="row row-cols-5">
                <div class="col g-4" v-for="(series) in store.serieList">
                    <AppCardProduct :product="series" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_container{
    width: 100%;
    padding: 30px 60px;
    background-color: rgb(20, 20, 20);
    .ms_schedule{
        color: white;
        width: 100%;
        .ms_card{
            display: flex;
            flex-direction: row;
            gap: 30px;
        }
    }
}
</style>