<template>
  <!-- <AddProduct v-if="true" /> -->
  <AddProduct />
  <div class="container mt-5">

    <h1>{{ $t('Products') }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th>{{ $t('ID') }}</th>
          <th>{{ $t('Name') }}</th>
          <th>{{ $t('Description') }}</th>
          <th>{{ $t('Price') }}</th>
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
  // console.log('fetchProducts mounted.');
  store.dispatch('products/loadProduct');
});

</script>
  