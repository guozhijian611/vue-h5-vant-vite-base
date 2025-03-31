<template>
  <div class="dashboard">
    <van-nav-bar title="仪表盘" />
    <div class="content">
      <van-cell title="用户信息" is-link />
      <van-cell title="系统设置" is-link />
    </div>
  </div>
</template>

<script setup>
import { showToast } from 'vant'

showToast('欢迎回来')
</script>

<style scoped>
.content {
  padding: 15px;
}
</style>