import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    serieList: [],
    searchText: "",
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=8d0af0e8c106b67078b532b5534ebd50&query=",
})