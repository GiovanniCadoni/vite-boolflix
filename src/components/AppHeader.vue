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
    <div  class="ms_header">
        <p class="ms_title">Boolflix</p>
        <div class="ms_search">
            <input @keyup.enter="$emit('performSearch')" type="search" class="form-control" placeholder="Search a movie or serie tv :"
            v-model.trim="store.searchText">
            <!-- <button @click="$emit('performSearch')" type="button" class="btn btn-danger">Search</button> -->
            <i @click="$emit('performSearch')" class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_header{
    height: 80px;
    background-color: black;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.ms_title{
    font-size: 3rem;
    color: red;
}
.ms_search{
    display: flex;
    align-items: center;
    width: 280px;
    gap: 20px;
    input{
        background-color: black;
        color: white;
    }
    input.form-control::placeholder{
        color: white;
    }
    i{
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
    }
}
</style>