<template>
    <div>
        <div 
            v-for="item of news"
            class="flex flex-row items-center">
            <img 
                :src="item.urlToImage"
                class="object-cover w-32 h-32 rounded m-4"/>
            <div class="pr-4 grow">
                <h3 class="font-mon text-2xl font-bold">{{ item.title }}</h3>
                <p class="font-mon my-2">{{ item.description }}</p>
                <div class="flex flex-row justify-between">
                    <p class="font-mon font-extralight text-gray-600">{{ item.publishedAt }}</p>
                    <p class="font-mon font-extralight text-gray-600">{{ item.author }}</p>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router'
import store from "../store"

const route = useRoute()

const news = computed(() => store.state.searchedNews)

onMounted(async () => {
    store.dispatch("searchByKeyword", route.params.keyword)
})
</script>