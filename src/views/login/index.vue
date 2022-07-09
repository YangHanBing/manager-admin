<template>
  <div class="login">
    <div class="box">
      <h1 class="title">火星</h1>
      <el-form :model="loginForm" ref="loginform" :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model.trim="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model.trim="loginForm.userPwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const loginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})
const loginform = ref('')
const rules = {
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const handleLoginSubmit = () => {
  loginform.value.validate(async (valid) => {
    if (!valid) return
    store.dispatch('user/login', loginForm)
    // router.push('/')
  })
}
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 500px;
    padding: 50px;
    box-shadow: 0px 0px 10px 3px rgb(199 201 203 / 30%);
    text-align: center;
    .title {
      font-size: 50px;
      font-weight: normal;
      margin-bottom: 30px;
    }
    .el-form {
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
