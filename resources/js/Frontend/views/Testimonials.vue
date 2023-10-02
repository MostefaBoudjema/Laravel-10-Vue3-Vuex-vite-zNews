<template>
    
    <top-banner :text="text_infos" />
</template>

<script setup>
import { ref } from 'vue'
import TopBanner from '../../components/TopBannerComp.vue';
const text_infos=ref({
    title: 'Testimonials',
    description: '',
    infos: '',
    img: "images/Add on Banner.png",
    img_height: "",
});

</script>

<style scoped>

</style>