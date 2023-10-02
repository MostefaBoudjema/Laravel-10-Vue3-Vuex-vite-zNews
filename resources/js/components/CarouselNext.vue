<template>
  <div class="page-heading">
    <section class="section">
      <div class="text-center">
        <button class="btn btn-lg btn-danger fw-bold w-50">
          {{ title }}
        </button>
      </div>
      <div class="row">
        <div class="col-md-12">
            <div class="card-body">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item" :class="{ active: index === currentIndex }"
                    v-for="(item, index) in slide_images" :key="index">
                    <img :src="item.src" class="d-block w-100" :alt="item.alt">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>              
            </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const currentIndex=ref(0);
const props=defineProps(['title', 'slide_images']);

</script>