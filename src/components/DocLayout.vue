<template>
  <div class="layout">
    <Sidebar :routes="routes"/>
    <main class="content">
      <slot/>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'

const routes = ref([])
</script>

<style>
.layout { display: flex; }
.content { flex: 1; padding: 2rem; max-width: 800px; margin: auto; }
</style>
