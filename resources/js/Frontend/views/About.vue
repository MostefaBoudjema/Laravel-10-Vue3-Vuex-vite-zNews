<template>
    <top-banner img="images/ABOUT US PAGE.png" :text="text_infos" />
    <we-offer-comp :servicesInfos="servicesInfos" />
    
    <slider-comp title="We deliver all major newspapers & magazines" :slide_images="slide_images" />
</template>

<script setup>
import { ref } from 'vue'
import TopBanner from '../../components/TopBannerComp.vue';
import WeOfferComp from '../../components/WeOfferComp.vue';
import sliderComp from '../../components/SliderComp.vue';

const text_infos=ref({
    title: 'About US',
    description: '',
    infos: '',
    img: "images/ABOUT US PAGE.png",
    img_height: "",
});
const slide_images=ref([
    { src: 'images/Home_page.png', alt: 'DNB Image' },
    { src: 'images/Home_page.png', alt: 'Gjensidige Image' },
    { src: 'images/Home_page.png', alt: 'Gjensidige Image' },
    { src: 'images/Home_page.png', alt: 'Gjensidige Image' },
    { src: 'images/Home_page.png', alt: 'Gjensidige Image' },
    { src: 'images/Home_page.png', alt: 'Gjensidige Image' },
]);
const servicesInfos=ref([
    {
        title: '',
        texts: [
            'Working hard and smart to deliver quality to the doorsteps of the homes of London and surrounding, and everything from small start up companies to large chain businesses.',
            'Since 2010, we have been working in the delivery industry as a family, and still are.',
            'Z News Distribution has no secret towards the first class service it provides. We work closely with our customers by listening to their needs and finding solutions to be able to provide a continuous flawless delivery, and most importantly the sustainability of the supply.',
            'Communication and Management has always been at the heart of Z News Distribution, whether a customer has just had its first delivery, or it’s thousandth delivery, to us the level of service given stays on the same wavelength.',
        ],
        imageSrc: "",
        alt: ""
    },
    {
        title: 'The Jump',
        texts: [
            'For quite some time now we have wanted to explore other fields, built around the solid delivery platform we have. We wanted to introduce more products without compromising our reliable services, nor the care we provide to our customers.',
            'So we looked at the things we love the most.',
            'Hmm, <i>difficult really<i>.',
            'We wanted to share something that the family believe in: Healthy living.',
            'This is how the idea of Organic food, recycling and less packaging came about, delivering more services to our customers and bringing a Healthy Goodies with the rest of our deliveries',
        ],
        imageSrc: "",
        alt: ""
    },

]);

</script>

<style scoped></style>