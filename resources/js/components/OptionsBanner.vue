<template>
    <div class="row parallax-container m-0">
        <div class="container parallax-row position-absolute">
            <div class="row">
                <div class="col-md-12" v-if="title">
                    <div class="d-flex icon-box py-2" >
                        <h1 class="text-white text1">
                            {{ $t(title) }}
                        </h1>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6" v-for="(service, index) in services" :key="index">
                    <div class="icon-box text-white">
                        <div class="icon" v-if="service.iconClass">
                            <i  :class="service.iconClass" />
                        </div>

                        <div class="icon-text">
                            <h4 class="title heading-font text-white">{{ service.title }}</h4>
                            <p>
                                <span class="txt">{{ service.description }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <parallax class="w-100" :speed-factor="0.3" breakpoint="(min-width: 80px)">
            <img class="parallax-image" :src="img" alt="img">
        </parallax>
    </div>
</template>
  
<script>
import Parallax from 'vue-parallaxy';

export default {
    components: {
        Parallax,
    },
    props: ['img', 'services','title'],
    data () {
        return {

        };
    },
};
</script>
  

<style scoped>
.parallax-image {
    object-fit: cover !important;
}

.parallax-container {
    position: relative;
    justify-content: center;
    align-items: center;
}

.icon-box {
    position: relative;
    padding: 46px 0px 0px 34px;
    z-index: 10;
    display: flex;
    align-items: flex-start;
}

.icon {
    font-size: 20px;
    color: #ffffff;
    padding: 10px 5px;
    margin-right: 20px;
}

.icon1 {
    font-size: 36px;
    padding: 0px 10px;
    margin-right: 20px;
}

.icon2 {
    font-size: 36px;
    padding: 0px 13px;
    margin-right: 20px;
}

.icon3 {
    font-size: 36px;
    padding: 0px 10px;
    margin-right: 20px;
}

.icon4 {
    font-size: 37px;
    padding: 0px 13px;
    margin-right: 20px;
}

.icon5 {
    font-size: 34px;
    padding: 2px 8px;
    margin-right: 20px;
}

.title.heading-font {
    font-size: 16px;
    margin-bottom: 11px;
    line-height: 1.2;
}

.txt {
    font-size: 13px;
    color: #aaaaaa;
}

.txt:hover {
    color: white;
}

.text1 {
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
}
@media screen and (max-width: 768px) {
    .parallax-row {
        position: relative !important;
    }

    .icon-box {
        padding: 46px 13px 0px 20px;
    }

    .Masthead {
        display: none;
    }
}

@media screen and (min-width: 768px) {
    .Masthead {
        min-height: 0px;
    }
}
</style>