import { createRouter, createWebHistory } from 'vue-router'

const modules = import.meta.glob('./docs/**/*.md')

function formatRoute(path) {
  return path
    .replace('./docs', '')
    .replace(/\/homepage\.md$/, '') // homepage becomes folder root
    .replace(/\.md$/, '')
    .replace(/\/$/, '') || '/'      // fallback for /
}

const routes = Object.keys(modules).map((path) => ({
  path: formatRoute(path),
  component: modules[path]
}))

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
