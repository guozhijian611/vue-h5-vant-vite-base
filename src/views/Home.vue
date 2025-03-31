<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
    <van-button type="primary" @click="$router.push('/dashboard')">
      前往仪表盘
    </van-button>
  </div>
</template>

<script setup>
// 不需要额外逻辑可以省略script部分
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
</style>