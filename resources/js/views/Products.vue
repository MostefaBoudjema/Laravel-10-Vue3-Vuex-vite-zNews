<template>
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
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" @click="addProduct">Add Product</button>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Products',
  computed: {
    ...mapState('products', ['products'])
  },
  methods: {
    ...mapActions('products', ['addProduct'])
  }
}
</script>
  