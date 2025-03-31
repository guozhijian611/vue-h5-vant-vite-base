<template>
  <div class="search-page">
    <van-nav-bar title="搜索" left-arrow @click-left="$router.go(-1)" />
    
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
    >
      <template #action>
        <van-button size="small" type="primary" @click="onSearch">搜索</van-button>
      </template>
    </van-search>

    <van-divider v-if="searchHistory.length">搜索历史</van-divider>
    <van-cell
      v-for="(item, index) in searchHistory"
      :key="index"
      :title="item"
      @click="searchFromHistory(item)"
    >
      <template #right-icon>
        <van-icon name="close" @click.stop="removeHistory(index)" />
      </template>
    </van-cell>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'

const searchValue = ref('')
const searchHistory = ref(JSON.parse(localStorage.getItem('searchHistory')) || [])

const onSearch = () => {
  if (!searchValue.value.trim()) {
    showToast('请输入搜索内容')
    return
  }
  
  // Add to search history
  if (!searchHistory.value.includes(searchValue.value)) {
    searchHistory.value.unshift(searchValue.value)
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
  }
  
  // Actual search logic would go here
  showToast(`搜索: ${searchValue.value}`)
}

const searchFromHistory = (item) => {
  searchValue.value = item
  onSearch()
}

const removeHistory = (index) => {
  searchHistory.value.splice(index, 1)
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
}
</script>

<style scoped>
.search-page {
  padding-bottom: 50px;
}
</style>