<template>
  <div class="login">
    <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-form">
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
      <el-button type="primary" :loading="loading" @click="handleLogin">
        Login
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { login } from '@/api/login';
import { ElMessage } from 'element-plus';

// Form data
const loginForm = ref({
  username: '',
  password: '',
});

// Form validation rules
const loginRules = {
  username: [{ required: true, message: 'Please input your username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input your password', trigger: 'blur' }],
};

// Loading state
const loading = ref(false);

// Get the current instance to access proxy and refs
const { proxy } = getCurrentInstance();

const handleLogin = async () => {
  // Use proxy to access the ref
  proxy.$refs.loginRef.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      try {
        const response = await login(loginForm.value);
        ElMessage.success('Login successful!');
        console.log('User Info:', response);
        // Redirect to another page after login
      } catch (error) {
        ElMessage.error(error.message || 'Login failed');
      } finally {
        loading.value = false;
      }
    }
  });
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
