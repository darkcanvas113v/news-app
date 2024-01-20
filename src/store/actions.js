import axiosClient from "../axiosClient";

export function searchByKeyword({ commit }, keyword) {
    axiosClient.get(`everything?q=${keyword}&apiKey=${import.meta.env.VITE_API_KEY}`)
        .then(({ data }) => {
            commit('setSearchedNews', data.articles)
        })
}