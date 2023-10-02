<template>
    <div class="container">
        <div class="service-main mt-2" v-for="(service, index) in servicesInfos" :key="index">
            <div class="row " v-if="index % 2 === 0">
                <div class="col-md-12 col-lg-6">
                    <div class="d-flex justify-content-center">
                        <h1 class="text1">{{ service.title }}</h1>
                    </div>
                    <div class="service-main-txt" v-for="(txt, txtIndex) in service.texts" :key="txtIndex">
                        <div v-html="txt"></div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <img class="service2-image" :src="service.imageSrc" :alt="service.alt">
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-md-12 col-lg-6">
                    <img class="service2-image" :src="service.imageSrc" :alt="service.alt">
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="d-flex justify-content-center">
                        <h1 class="text1">{{ service.title }}</h1>
                    </div>
                    <h6 class="service-main-txt" v-for="(txt, txtIndex) in service.texts" :key="txtIndex">
                        <div v-html="txt"></div>
                    </h6>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const { servicesInfos }=defineProps(['servicesInfos']);

</script>

<style scoped>
.service-main {
    margin-top: 50px;
    padding-bottom: 50px;
    padding-top: 50px;
}

.service-main-txt {
    margin-top: 20px;
    font-family: 'Sahitya';
    font-size: 1.3em;
    font-weight: 700;
    line-height: 1.2;
}

.text1 {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #cf2f2f;
}

.service2-image {
    width: 100%;
}

@media (min-width: 768px) and (max-width: 992px) {

    .service-main {
        margin-top: 0px;
    }
}

@media screen and (max-width: 768px) {

    .service-main {
        margin: 0;
        margin-top: 0px;
        padding-bottom: 10px;
        padding-top: 20px;
    }
}
</style>