<template>
    <div class="container mt-5">
        <h1 class="mb-3">Add Product</h1>
        <input v-model="newProduct.name" type="text" class="form-control" placeholder="Name" />
        <input v-model="newProduct.description" type="text" class="form-control" placeholder="Description" />
        <input v-model="newProduct.price" type="number" step="0.01" class="form-control" placeholder="Price" />
        <button class="btn btn-primary" @click="addNewProduct">Add Product</button>
    </div>
</template>

  

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Products',
    data() {
        return {
            newProduct: {
                name: '',
                description: '',
                price: null,
            },
        };
    },
    methods: {
        ...mapActions('products', ['addProduct']),
        async addNewProduct() {
            // Call the addProduct action with the new product data
            await this.addProduct({
                name: this.newProduct.name,
                description: this.newProduct.description,
                price: this.newProduct.price,
            });

            // Clear the input fields after adding the product
            this.newProduct.name='';
            this.newProduct.description='';
            this.newProduct.price=null;
        },
    },
};
</script>
  