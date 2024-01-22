<template>
  <div class="h-full">
    <header class="bg-primary shadow h-16 flex flex-row items-center">
      <router-link 
        :to="{name: 'home'}" 
        class="font-mon text-2xl font-bold pl-6 inline-flex items-center h-full text-white">news-app</router-link>

      <input 
        class="bg-secondary grow mx-6 p-2 rounded" 
        placeholder="Search by keyword"
        type="text"
        v-model="keyword"
        @keyup.enter="searchByKeyword"/>
      
      <button 
        class="text-center bg-secondary rounded w-16 mr-6">US</button>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
  
</template>

<script setup>
import { ref } from "vue"
import router from "./router"

const keyword = ref('')

function searchByKeyword() {
  router.push(`/search/${keyword.value}`)
}

</script>
