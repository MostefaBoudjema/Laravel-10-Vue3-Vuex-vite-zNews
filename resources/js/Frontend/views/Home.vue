<template>
    <div>        
        <!-- <carousel/> -->
        <top-banner :text="text_infos" />
        <slide :img-list="slide_images"/>
        <!-- <slider-comp title="We deliver all major newspapers & magazines" :slide_images="slide_images" /> -->
        <!-- <carousel-next title="We deliver all major newspapers & magazines" :slide_images="slide_images"/> -->
    </div>
</template> 
<script setup>
import { ref } from 'vue'
import Slide from '../../components/Slide.vue';
import CarouselNext from '../../components/CarouselNext.vue';
import sliderComp from '../../components/SliderComp.vue';
import TopBanner from '../../components/TopBannerComp.vue';

const text_infos=ref({
    title: 'Deliver Services',
    description: 'Home & Businesses',
    infos: 'Newspapers-Magazines-Leaflets',
    img: "images/Home_page.png",
    img_height: "",
});
const slide_images=ref([
    { src: '/images/faces/1.jpg', alt: 'face1' },
    { src: '/images/faces/2.jpg', alt: 'face2' },
    { src: '/images/faces/3.jpg', alt: 'face3' },
    { src: '/images/faces/4.jpg', alt: 'face4' },
    { src: '/images/faces/5.jpg', alt: 'face5' },
    { src: '/images/faces/6.jpg', alt: 'face6' },
    { src: '/images/faces/7.jpg', alt: 'face7' },
    { src: '/images/faces/8.jpg', alt: 'face8' },
]);

</script>
  