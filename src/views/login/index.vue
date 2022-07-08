<template>
  <div class="">
    <p @click="send">登录</p>
  </div>
</template>
<script setup>
import User from '../../api/user'
const send = async () => {
  const response = await User.login({ userName: 'admin', userPwd: '123456' })
  console.log(response)
}
</script>
<style scoped lang="scss"></style>
