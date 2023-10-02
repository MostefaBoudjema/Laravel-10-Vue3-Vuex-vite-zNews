<template>
    <div class="container">
        <div class="row mt-5 mb-5">
            <div class="col-sm-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <!-- <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div> -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://therichpost.com/wp-content/uploads/2021/10/Vue-3-Bootstrap-5-Carousel-Slider-Working-Functionaliy-Example.png"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://therichpost.com/wp-content/uploads/2021/10/Vue-3-Bootstrap-5-Carousel-Slider-Working-Functionaliy-Example.png"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://therichpost.com/wp-content/uploads/2021/10/Vue-3-Bootstrap-5-Carousel-Slider-Working-Functionaliy-Example.png"
                                class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//importing bootstrap 5
import "bootstrap/dist/js/bootstrap.min.js";
import * as Bootstrap from 'bootstrap'
//import DemoComponent from "./components/DemoComponent.vue"

export default {

    mounted() {
        var myCarousel=document.querySelector('#myCarousel')
        new Bootstrap.Carousel(myCarousel)
    }
}
</script>