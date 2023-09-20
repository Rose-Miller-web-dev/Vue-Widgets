<template>

  <h1>My Anime List</h1>
  <draggable v-model="myAnimeList" tag="ol">
    <template #item="{ element: anime}">
      <li>{{ anime }}</li>
    </template>
  </draggable>

</template>

<script setup>
  import { ref } from 'vue'
  import draggable from 'vuedraggable'

  const myAnimeList = ref([
    'One Punch Man',
    'My Hero Academy',
    'Attack On Titon'
  ])
</script>

<style>

li {
  cursor: pointer;
  padding: 12px;
  border: gray 1px solid;
  margin: 8px;
}

</style>