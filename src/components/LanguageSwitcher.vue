<template>
  <div class="lang-switcher">
    <button v-for="lang in langs" :key="lang" @click="switchLang(lang)">
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const langs = ['default', 'ro']
const router = useRouter()
const route = useRoute()

function switchLang(lang) {
  const segments = route.path.split('/')
  if (langs.includes(segments[1])) segments[1] = lang
  else if (lang !== 'default') segments.unshift('', lang)
  else if (segments[1] === 'default') segments.splice(1,1)
  router.push(segments.join('/'))
}
</script>

<style>
.lang-switcher { margin-top: 2rem; }
.lang-switcher button { margin-right: 0.5rem; }
</style>
