<template>
   <h1>My Anime List</h1>

   <draggable v-model="animeList" tag="ul">
    <template #item="{ element: anime }">
        <li class="list-group-item">{{ anime }}</li>
    </template>
   </draggable>
   
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import draggable from 'vuedraggable'

  const animeList = ref([
    'One Punch Man',
    'Attack On Titon',
    'Parasite',
    'My Hero Academy'
  ])
  
  </script>
  
  <style>

  li {
    cursor: pointer;
  }
  
  </style>
  