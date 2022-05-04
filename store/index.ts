import { defineStore } from 'pinia'
import { useFetch } from 'nuxt/app'

export const useCommonStore = defineStore('user', {
  state: () => ({
    title: '',
    userName: 'empty',
    isLogin: false,
  }),
  actions: {
    updateTitle(title) {
      this.title = title
    },
    async login() {
      await useFetch('/api/login')
    },
  },
})
