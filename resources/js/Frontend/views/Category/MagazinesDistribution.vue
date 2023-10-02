<template>
    <top-banner :text="text_infos" />
</template>

<script setup>
import { ref } from 'vue'
import TopBanner from '../../../components/TopBannerComp.vue';
const text_infos=ref({
    title: 'Magazines distribution',
    description: '',
    infos: '',
    img: "/images/banner-bg.png",
    img_height: "",
});

</script>

<style scoped>

</style>