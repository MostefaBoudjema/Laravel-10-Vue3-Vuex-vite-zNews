<template>
    <div class="Carousel">
        <!-- <div class="lightbox" v-show="lightboxActive" @click.self="
            lightboxActive = false;
        currLightboxImg = currImgIdx;
        ">
            <img :src="imgList[currLightboxImg].src" />
            <div class="prev" @click="goToImg(currLightboxImg - 1)"></div>
            <div class="next" @click="goToImg(currLightboxImg + 1)"></div>
        </div> -->
        <!-- <img
            class="currImg"
            :src="imgList[currImgIdx].src"
            @click="lightboxActive = true"
        /> -->
        <transition-group class="CROP" :name="transition_name" tag="div">
            <div class="Carousel_chunk" v-for="(chunk, i) in arrChunk" v-show="currSlide == i" :key="i">
                <div class="chunk_item" v-for="(item, j) in chunk" :key="j" @click="currImgIdx = j + i * chunkSize"
                    :class="{ CURR: item.src == imgList[currImgIdx].src }">
                    <img :src="item.src" />
                </div>
            </div>
        </transition-group>
        <!-- <div class="Carousel-controls">
            <div></div>
            <div></div>
            <svg @click="prev" width="48" height="48" viewBox="0 0 24 24" fill="gold" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 8 8 12 12 16"></polyline>
                <line x1="16" y1="12" x2="8" y2="12"></line>
            </svg>
            <div class="Carousel-controls_dot" v-for="(dot, i) in arrChunk" :class="{ CURR: currSlide == i }" :key="dot.id"
                @click="goToChunk(i)">
                {{ i + 1 }}
            </div>
            <svg @click="next" width="48" height="48" viewBox="0 0 24 24" fill="gold" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <div></div>
            <div></div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            chunkSize: 1,
            currSlide: 0,
            currImgIdx: 0,
            transition_name: "slide_next",
            lightboxActive: false,
            currLightboxImg: 2,
        };
    },
    mounted() {
        this.chunkSize=this.imgList.length;
     },
    props: ["imgList"],
    watch: {
        currImgIdx(newVal) {
            this.currLightboxImg=newVal;
        },
    },
    computed: {
        arrChunk() {
            return Array.from(
                { length: Math.ceil(this.imgList.length/this.chunkSize) },
                (v, i) =>
                    this.imgList.slice(
                        i*this.chunkSize,
                        i*this.chunkSize+this.chunkSize
                    )
            );
        },
    },
    methods: {
        prev() {
            this.transition_name="slide_prev";
            this.currSlide=
                this.currSlide==0
                    ? this.arrChunk.length-1
                    :this.currSlide-1;
        },
        next() {
            this.transition_name="slide_next";
            this.currSlide=
                this.currSlide==this.arrChunk.length-1
                    ? 0
                    :this.currSlide+1;
        },
        goToImg(n) {
            this.currLightboxImg=
                n<0? this.imgList.length-1:n%this.imgList.length;
        },
        goToChunk(idx) {
            this.transition_name=
                idx<this.currSlide? "slide_prev":"slide_next";
            this.currSlide=idx;
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    display: flex;
    height: 100vh;
}

.CROP {
    /* height: 96px; */
    overflow: hidden;
    width: 100%;
    padding: 8px 0;
}

.Carousel {
    /* margin: auto; */
    margin-left: 3rem;
    margin-right: 3rem;
    /* width: 780px; */
    width: 100%;
}

@media only screen and (max-width: 640px) {
    .Carousel {
        margin-top: 2rem;

        margin-left: 1rem;
        margin-right: 2rem;
    }
}

.Carousel_chunk {
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;
    align-items: center;
}

.Carousel {
    cursor: pointer;
}

.currImg {
    height: 280px;
    /* width: 50%; */
    margin: auto;
    cursor: pointer;
}

.chunk_item {
    height: 270px;
    margin: 2px;
    padding: 2px;
    border: 1px solid transparent;
    cursor: pointer;
}

.chunk_item:hover {
    border: 1px solid #2196f3;
}

.chunk_item.CURR {
    background: #2196f3;
    /* background: #ffd700; */
    outline: 2px solid #000;
    border-color: transparent;
}

.chunk_item img {
    display: inline-block;
    height: 100%;
}

.Carousel-controls {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    justify-content: space-around;
    /* justify-content: space-between; */
    align-items: center;
}

.Carousel-controls_dot,
.Carousel-controls svg {
    cursor: pointer;
}

svg {
    fill: rgb(59 130 246 / var(--tw-bg-opacity));
}

svg:hover {
    fill: rgb(59 150 246 / var(--tw-bg-opacity));
}

.Carousel-controls {
    fill: #ff0;
}

.Carousel-controls_dot {
    border-radius: 50%;
    width: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    background-color: #222;
    font-family: sans-serif;
    font-size: 0.5em;
    color: #fff;
}

.Carousel-controls_dot:hover {
    transform: scale(1.4, 1.4);
}

.Carousel-controls_dot.CURR {
    cursor: none;
    /* background-color: #ffd700; */
    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
    color: #000;
    font-weight: bold;
    transform: scale(1.4, 1.4);
}

.slide_next-enter-active,
.slide_prev-enter-active {
    transition: transform 0.3s;
}

.slide_next-enter {
    transform: translateX(100%);
}

.slide_prev-enter {
    transform: translateX(-100%);
}

.lightbox {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #616574 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 10 10' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke='gold'><line x1='4' y1='4' x2='6' y2='6' /><line x1='6' y1='4' x2='4' y2='6' /></svg>") top right no-repeat;
    display: flex;
}

.lightbox img {
    cursor: default;
    margin: auto;
    max-width: 90%;
    max-height: 100%;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 60px;
    margin: -30px 4% 0;
    background: #444 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='gold' d='M6,2 L4,5 L6,8'/></svg>") center/cover no-repeat;
}

.prev:hover,
.next:hover {
    background-color: #222;
}

.next {
    right: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='gold' d='M4,2 L6,5 L4,8'/></svg>");
}
</style>
