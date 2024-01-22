<template>
    <div>
        <div 
            v-for="item of news"
            :key="item.title">
            <a class="flex flex-row items-center" href="javascript:void(0)" @click="openDetails(item.url)">
                <img
                    :src="item.urlToImage"
                    class="inline-block object-cover w-48 h-48 m-4 rounded"
                    @error="$event.target.src=defaultImage"/>
            
                <div class="pr-4 grow">
                    <h3 class="font-mon text-2xl font-bold">{{ item.title }}</h3>
                    <p class="font-mon my-2">{{ item.description }}</p>
                    <div class="flex flex-row justify-between">
                        <p class="font-mon font-extralight text-gray-600">{{ item.publishedAt.split("T")[0] }}</p>
                        <p class="font-mon font-extralight text-gray-600">{{ item.author }}</p>
                    </div>
                </div>
            </a>
            
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router'
import store from "../store"
import defaultImage from "../assets/defaultImage.png"

const route = useRoute()

const news = computed(() => store.state.searchedNews)

onMounted(async () => {
    store.dispatch("searchByKeyword", route.params.keyword)
})

watch(
    () => route.params.keyword,
    async newKeyword => {
        store.dispatch("searchByKeyword", newKeyword)
    }
)

function openDetails(url) {
    window.open(url, '_blank')
}
</script>