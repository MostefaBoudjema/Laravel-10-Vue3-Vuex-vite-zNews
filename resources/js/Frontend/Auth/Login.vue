<!-- Login.vue  -->
<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-center " style="height: 60vh;">
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
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store=useStore();
const router=useRouter();

const form=ref({
  email: '',
  password: '',
});

const error=ref(null);

const login=async () => {
  try {
    const userData={ ...form._value };
    const response=await store.dispatch('users/loginUser', userData);

    // console.log(response.user.status); 
    if (response&&response.user.status=='success') {
      router.push('/');
    } else {
      console.log(response.error);
      error.value=response.error;
    }
  } catch (err) {
    console.log(err);
    error.value=err;
  }
};



</script>

<style scoped></style>
