import { reactive } from "vue";

export const store = reactive({
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "8d0af0e8c106b67078b532b5534ebd50",
    filmList: [],
    serieList: [],
    searchText: "",
    flag: [ "it", "en", "es", "de", "fr" ],
})