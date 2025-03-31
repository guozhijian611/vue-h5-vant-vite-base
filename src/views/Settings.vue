<template>
  <div class="settings-page">
    <van-nav-bar title="系统设置" left-arrow @click-left="$router.go(-1)" />
    
    <van-cell-group inset>
      <van-cell title="账号管理" is-link to="/settings/account" />
      <van-cell title="通知设置" is-link to="/settings/notifications" />
      <van-cell title="隐私设置" is-link to="/settings/privacy" />
    </van-cell-group>

    <div class="action-buttons">
      <van-button block type="primary" @click="handleLogout">退出登录</van-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { showConfirmDialog } from 'vant'

const router = useRouter()
const userStore = useUserStore()

const handleLogout = async () => {
  try {
    await showConfirmDialog({
      title: '确认退出',
      message: '您确定要退出当前账号吗？',
    })
    userStore.clearToken()
    router.push('/login')
  } catch (error) {
    // 用户取消了退出
  }
}
</script>

<style scoped>
.settings-page {
  padding-bottom: 50px;
}

.action-buttons {
  padding: 20px;
  margin-top: 20px;
}
</style>