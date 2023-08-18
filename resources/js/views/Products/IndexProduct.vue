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
    <AddProduct/>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'
import AddProduct from './AddProduct.vue';

export default {
    name: 'Products',
    computed: {
        ...mapState('products', ['products'])
    },
    methods: {
        ...mapActions('products', ['loadProduct'])
    },
    mounted() {
        console.log('fetchProducts mounted.');
        this.loadProduct();
    },
    components: { AddProduct }
}
</script>
  