<template>
    <div class="row service-header m-0">
        <img :src="text.img" :alt="text.img" :height="text.img_height" class="image_bg p-0">
        <div class="container service-header-title p-0 ">
            <div class="title-bg-color9999">
                <h1 class="bg_txt oswald-700 d-flex justify-content-center">
                    {{ text.title }}
                </h1>
                <h4 class="medium_txt oswald-700 d-flex justify-content-center">
                    {{ text.description }}
                </h4>
                <p class="info_txt text-danger d-flex justify-content-center">
                    {{ text.infos }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props=defineProps(['text']);

</script>

<style scoped>
.title-bg-color {
    background-color: #ffffff76;
}

.oswald-700 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
}

.service-header {
    position: relative;
    justify-content: center;
}

.service-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%); */
    z-index: 1;
}

.image_bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.service-header-title {
    position: absolute;
    top: 27%;
    z-index: 2;
}

.bg_txt {
    font-size: 120px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 50px;
    color: #000;
}

.medium_txt {
    font-size: 50px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 15px;
    color: #000;
}

.info_txt {
    font-family: 'Gaegu', 'handwriting';
    font-size: 50px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 20px;
}

/* Mobile Version Responsive */
@media (min-width: 214px) and (max-width: 320px) {
    .service-header-title h1 {
        padding: 0 !important;
    }
}

@media screen and (max-width: 768px) {

    .service-header-title h1 {
        /* padding-top: 60px; */
        padding-left: 15px;
        line-height: 60px;
    }
}

@media (min-width: 768px) and (max-width: 992px) {
    .service-header-title {
        top: 45%;
    }
}</style>