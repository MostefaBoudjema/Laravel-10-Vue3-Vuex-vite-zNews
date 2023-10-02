<template>
    <slick ref="slick" :options="slickOptions">
        <div style="position: relative" v-for="(image, index) in slide_images" :key="index">
            <img v-lazy="image.src" class="image-slider" :width="50" :height="50" :data-srcset="image.src + '?size=50 50w'"
                :alt="image.alt" />
        </div>
    </slick>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.scss'
export default {
    components: {
        Slick
    },
    props: ['slide_images'],
    data () {
        return {
            slickOptions: {
                arrows: false,
                slidesToShow: 1,
                dots: false,
                infinite: true,
                autoplaySpeed: 3000,
                autoplay: true,
                fade: true,
                swipeToSlide: true,
                speed: 1500
            },
        }
    }

}
</script>

<style scoped>
.image-slider {
    width: 100%;
    height: 420px;
    max-height: 420px;
    object-fit: cover;
}
</style>