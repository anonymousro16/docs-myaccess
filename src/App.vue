<template>
  <router-view v-slot="{ Component }">
    <DocLayout>
      <component :is="Component" />
    </DocLayout>
  </router-view>
</template>

<script setup>
import DocLayout from './components/DocLayout.vue'
</script>
