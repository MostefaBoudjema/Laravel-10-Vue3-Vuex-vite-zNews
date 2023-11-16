<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-center " style="height: 100vh;">
      <form @submit.prevent="login" class="needs-validation p-5 border w-50">
        <div class="mb-3 row">
          <label for="email" class="col-sm-4 col-form-label">Email:</label>
          <div class="col-sm-8">
            <input type="text" id="email" class="form-control" v-model="form.email" required>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="password" class="col-sm-4 col-form-label">Password:</label>
          <div class="col-sm-8">
            <input type="password" id="password" class="form-control" v-model="form.password" required>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-12 col-form-label text-danger">{{ error }}</label>
          <p v-if="error" class="text-danger error"></p>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>

import { ref } from 'vue';
import axios from 'axios'; // You need to import Axios or your HTTP client of choice.


const form=ref({
  email: '',
  password: '',
});

const error=ref(null);

const login=async () => {
  try {
    // First, get the CSRF token cookie
    await axios.get('/sanctum/csrf-cookie');

    // Then, send the login request
    const response=await axios.post('/api/login', form.value);

    const data=response.data;
    if (data.status==='success') {
      localStorage.setItem('adminUser', JSON.stringify(data.name));
      // You should use the router from Vue Router here.
      // This example assumes you have Vue Router set up.
      router.push('/admin/dashboard');
    } else {
      error.value=data.error;
    }
  } catch (err) {
    error.value='An error occurred during login.';
  }
};
</script>

<style scoped></style>
