<template>
  <!-- <AddProduct v-if="true" /> -->
  <AddProduct :showAddProp="showAdd" @click="showAdd = !showAdd" />
  <div class="container mt-5">

    <h1>Products</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td><button class="btn btn-danger" @click="performDeleteProduct(product.id)">x</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import AddProduct from './AddProduct.vue';

const showAdd=ref(false);
const store=useStore();
const products=computed(() => store.state.products.products);

const performDeleteProduct=async (id) => {
  try {
    await store.dispatch('products/deleteProduct', id);
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

onMounted(() => {
  console.log('fetchProducts mounted.');
  store.dispatch('products/loadProduct');
});

</script>
  