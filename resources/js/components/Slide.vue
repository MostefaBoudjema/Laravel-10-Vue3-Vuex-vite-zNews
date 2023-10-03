<template>
    <div class="mx-1">
        <transition-group class="CROP" :name="transition_name" tag="div">
            <div class="Carousel_chunk" v-for="(chunk, i) in arrChunk" :key="i">
                <div class="chunk_item" v-for="(item, j) in chunk" :key="j" 
                    :style="{ 'max-width': img_max_width + '%' }">
                    <img :src="item.src" />
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chunkSize: 1,
            transition_name: "slide_next",
            img_max_width: 100,
        };
    },
    mounted() {
        this.chunkSize=this.imgList.length;
        this.img_max_width=100/this.imgList.length;
     },
    props: ["imgList"],
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


.Carousel_chunk {
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Make items stretch to fill the height */
}

.chunk_item {
  flex: 1; /* Distribute available space evenly among items */
  margin: 2px;
  padding: 2px;
  border: 1px solid transparent;
  cursor: pointer;
  box-sizing: border-box; /* Ensure padding and border are included in width/height calculations */
}

.chunk_item img {
  max-width: 100%;
  height: auto; /* Maintain image aspect ratio */
}


svg {
    fill: rgb(59 130 246 / var(--tw-bg-opacity));
}

svg:hover {
    fill: rgb(59 150 246 / var(--tw-bg-opacity));
}

</style>
