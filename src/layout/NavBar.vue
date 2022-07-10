<template>
  <div class="navabr">
    <Breadcrumb></Breadcrumb>
    <el-dropdown class="dropdown" @command="handleCommand">
      <span class="ico">{{ $store.getters.userInfo.userName }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="email"
            >邮箱：{{ $store.getters.userInfo.userEmail }}</el-dropdown-item
          >
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import Breadcrumb from '../components/Breadcrumb'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const handleCommand = (command) => {
  switch (command) {
    case 'email':
      handleToEmail()
      break
    case 'logout':
      handleLogout()
      break
  }
}
// 点击邮箱事件
const handleToEmail = () => {
  console.log('这是邮箱')
}
// 退出登录事件
const handleLogout = async () => {
  await store.dispatch('user/logout')
  router.push('/login')
}
</script>
<style scoped lang="scss">
.navabr {
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .ico {
    color: skyblue;
  }
}
</style>
