<template>
  <div class="not-found">
    <van-empty
      image="error"
      image-size="200"
      description="哎呀，页面走丢了"
    >
      <div class="action-buttons">
        <van-button 
          round 
          type="primary" 
          size="small"
          @click="$router.push('/')"
        >
          <van-icon name="home-o" /> 返回首页
        </van-button>
        <van-button 
          round 
          plain 
          type="primary" 
          size="small"
          @click="$router.go(-1)"
        >
          <van-icon name="revoke" /> 返回上一页
        </van-button>
      </div>
    </van-empty>
  </div>
</template>

<script setup>
// 不需要额外逻辑可以省略script部分
</script>

<style scoped>
.not-found {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.action-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
}
</style>