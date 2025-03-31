<template>
  <van-config-provider :theme="currentTheme">
    <van-switch
      v-model="isDark"
      size="24px"
      @change="toggleDarkMode"
    />
  </van-config-provider>
</template>

<script setup>
import { ref, computed } from 'vue'

const isDark = ref(false)
const currentTheme = computed(() => isDark.value ? 'dark' : 'light')

const toggleDarkMode = (checked) => {
  document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light')
}
</script>