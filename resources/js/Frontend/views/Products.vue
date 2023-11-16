<template>
  <div class="container mt-5">
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-12 col-lg-4 mb-4 mb-lg-0 g-3">
        <div class="card text-black">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
            class="card-img-top" alt="iPhone" />
          <div class="card-body">
            <div class="text-center mt-1">
              <h4 class="card-title">{{ product.name }}</h4>
              <h6 class="text-primary mb-1 pb-3">Starting at ${{ product.price }}</h6>
            </div>

            <div class="text-center">
              <div class="d-flex flex-column mb-4">
                <span>{{ product.description }}</span>
              </div>

            </div>

            <div class="d-flex flex-row">
              <button type="button" class="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark">
                Learn more
              </button>
              <button type="button" class="btn btn-danger flex-fill ms-1">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
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
  // console.log('fetchProducts mounted.');
  store.dispatch('products/loadProduct');
});

</script>
  