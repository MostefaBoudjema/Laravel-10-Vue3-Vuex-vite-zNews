<template>
    <div class="container mt-5">
        <h1 @click="showAdd = !showAdd" class="mb-3">Add Product</h1>
        <div v-if="showAdd">
            <input v-model="newProduct.name" type="text" class="form-control" placeholder="Name" />
            <input v-model="newProduct.description" type="text" class="form-control" placeholder="Description" />
            <input v-model="newProduct.price" type="number" step="0.01" class="form-control" placeholder="Price" />
            <button class="btn btn-primary" @click="addNewProduct">Add Product</button>
        </div>
    </div>
</template>

  

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store=useStore();
const showAdd=ref(false);
const newProduct=ref({
    name: '',
    description: '',
    price: ''
});

const addNewProduct=async () => {
    // Call the addProduct action with the new product data
    await store.dispatch('products/addProduct', {
        name: newProduct.value.name,
        description: newProduct.value.description,
        price: newProduct.value.price
    });

    // Clear the input fields after adding the product
    newProduct.value.name='';
    newProduct.value.description='';
    newProduct.value.price=null;
    store.dispatch('products/loadProduct');
};


</script>

  