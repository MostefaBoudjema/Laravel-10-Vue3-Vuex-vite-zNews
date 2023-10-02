<template>
    <div class="container mb-5 mt-3">

        <div class="text-center">
            <button class="btn btn-lg btn-danger fw-bold w-50">
                {{ title }}
            </button>
        </div>
        <slick ref="slick" :options="slickOptions">
            <div v-for="(image, index) in slide_images" :key="index" class="slider_div">
                <img :src="image.src" class="slider_img" :alt="image.alt">
            </div>
        </slick>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';

const props=defineProps(['title', 'slide_images']);

const slickOptions=ref({
    arrows: false,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    swipeToSlide: true,
    speed: 1500,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
</script>
  
<style scoped>
.text1 {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 700;
}

.slider_div {
    padding: 12px;
}

.slider_img {
    max-height: 100px;
}
</style>
  