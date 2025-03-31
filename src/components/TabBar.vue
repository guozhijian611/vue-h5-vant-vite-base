<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/settings">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>