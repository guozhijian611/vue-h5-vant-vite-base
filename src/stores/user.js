import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: null
  }),
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    clearToken() {
      this.token = ''
      localStorage.removeItem('token')
    },
    async fetchUserInfo() {
      // 获取用户信息的API调用
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
})