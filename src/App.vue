<template>
  <div class="app-container">
    <router-view />
    <TabBar />
    <div class="dark-mode-toggle">
      <DarkModeToggle />
    </div>
  </div>
</template>

<script setup>
import TabBar from '@/components/TabBar.vue'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
</script>

<style>
.app-container {
  min-height: 100vh;
}

.dark-mode-toggle {
  position: fixed;
  right: 16px;
  bottom: 80px;
  z-index: 999;
}

/* 黑暗模式样式 */
[data-theme="dark"] {
  --van-background-color: #1a1a1a;
  --van-text-color: #f5f5f5;
}
</style>
