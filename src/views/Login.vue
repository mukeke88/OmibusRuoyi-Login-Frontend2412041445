<template>
  <div class="login">
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">Login</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          placeholder="Username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="Password"
        />
      </el-form-item>
      <el-button type="primary" @click="handleLogin">Login</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const loginForm = ref({
  username: "",
  password: "",
});

const loginRules = {
  username: [{ required: true, message: "Please input your username", trigger: "blur" }],
  password: [{ required: true, message: "Please input your password", trigger: "blur" }],
};

const handleLogin = () => {
  console.log("Login form submitted:", loginForm.value);
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  width: 300px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>