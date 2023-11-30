<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
        };
    },
    props: {
        product: Object,
    },
    methods: {
        getImagePath(language) {
            return new URL(`../assets/img/${language}.jpg`, import.meta.url).href;
        },
    }
};
</script>
    
<template>
    <img :src="`https://image.tmdb.org/t/p/w342/${product.poster_path}`" alt="">
    <h3>{{ product.title ? product.title : product.name }}</h3>
    <h4>{{ product.original_title ? product.original_title : product.original_name }}</h4>
    <img class="ms_img-lang" v-if="this.store.flag.includes(product.original_language)" :src="getImagePath(product.original_language)" alt="">
    <p v-else>{{ product.original_language }}</p>
    <ul>
        <li>
            <i v-for="(starSolid) in Math.ceil(product.vote_average / 2)" class="fa-solid fa-star"></i>
            <i v-for="(starVoid) in 5 - Math.ceil(product.vote_average / 2)" class="fa-regular fa-star"></i>
        </li>
    </ul>

</template>

<style scoped lang="scss">
.ms_img-lang{
    width: 120px;
}
li{
    list-style: none;
}
</style>