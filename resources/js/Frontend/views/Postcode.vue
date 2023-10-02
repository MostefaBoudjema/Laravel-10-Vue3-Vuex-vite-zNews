<template>
    
    <top-banner :text="text_infos" />
</template>

<script setup>
import { ref } from 'vue'
import TopBanner from '../../components/TopBannerComp.vue';
const text_infos=ref({
    title: 'Post Code',
    description: '',
    infos: '',
    img: "images/postcode.png",
    img_height: "",
});

</script>

<style scoped>

</style>