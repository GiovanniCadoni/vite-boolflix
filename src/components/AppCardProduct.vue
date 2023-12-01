<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
            hover: false,
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
    <div class="card bg-black ms_pointer" @mouseover="hover = true" @mouseleave="hover = false">
        <div v-if="hover">
            <div class="ms_cards card-img-top">
            </div>
        </div>
        <div v-else>
            <img v-if="(product.poster_path)" class="ms_cards card-img-top"
            :src="`https://image.tmdb.org/t/p/w342/${product.poster_path}`" alt="">
            <img v-else class="ms_cards ms_card-no-image card-img-top" src="../assets/img/no-image.jpg" alt="">
        </div>
        <div class="ms_info py-3" v-if="hover">
            <h3 class="text-center px-3">{{ product.title ? product.title : product.name }}</h3>
            <h5 class="text-center px-4"><em>{{ product.original_title ? product.original_title : product.original_name }}</em></h5>
            <img class="ms_img-lang w-25 py-3" v-if="this.store.flag.includes(product.original_language)"
                :src="getImagePath(product.original_language)" alt="">
            <p v-else>{{ product.original_language }}</p>
            <ul class="px-1 py-1">
                <li>
                    <i v-for="(starSolid) in Math.ceil(product.vote_average / 2)" class="fa-solid fa-star"></i>
                    <i v-for="(starVoid) in 5 - Math.ceil(product.vote_average / 2)" class="fa-regular fa-star"></i>
                </li>
            </ul>
            <p class="pt-4 px-3 text-center">{{ product.overview }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_pointer{
    cursor: pointer;
    overflow-y: auto;
}

.ms_cards{
    width: 260.64px;
    height: 390.95px;
}
.ms_info{
    width: 100%;
    position: absolute;
    margin: auto;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
div,
img {
    border: none;
    border-radius: 10px;
}

.ms_img-lang {
    width: 120px;
}

.ms_card-no-image {
    height: 390.95px;
}

li {
    list-style: none;
}

</style>