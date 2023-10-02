<template>
    <section style="background-color: #eee;">
        <div class="text-center container py-5">
            <h4 class="mt-4 mb-5"><strong>Bestsellers</strong></h4>
            <div class="row">
                <div v-for="product in products" :key="product.id" class="col-lg-4 col-md-12 mb-4">
                    <div class="card">
                        <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                            data-mdb-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                                class="w-100" />
                            <a href="#!">
                                <div class="mask">
                                    <div class="d-flex justify-content-start align-items-end h-100">
                                        <h5><span class="badge bg-primary ms-2">New</span></h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </div>
                            </a>
                        </div>
                        <div class="card-body">
                            <a href="" class="text-reset">
                                <h5 class="card-title mb-3">{{ product.name }}</h5>
                            </a>
                            <a href="" class="text-reset">
                                <p>{{ product.description }}</p>
                            </a>
                            <h6 class="mb-3">${{ product.price }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

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
  