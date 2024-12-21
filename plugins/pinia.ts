import { createPinia } from 'pinia'

export default defineNuxtPlugin((NuxtApp) => {
  const pinia = createPinia()

  NuxtApp.vueApp.use(pinia)
})