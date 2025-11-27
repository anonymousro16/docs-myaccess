<template>
  <nav class="sidebar">
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.path.replace(/^\/|\/$/g, '') || 'Home' }}</router-link>
      </li>
    </ul>
    <LanguageSwitcher />
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const router = useRouter()
const routes = computed(() => router.getRoutes())
</script>

<style>
.sidebar { width: 220px; padding: 1rem; background: #f9f9f9; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { margin: 0.5rem 0; }
</style>
