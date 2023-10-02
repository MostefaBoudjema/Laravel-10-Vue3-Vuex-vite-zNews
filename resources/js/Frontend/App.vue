<template>
    <div id="app-div">
        <top-navbar />
        <navbar />
        <router-view />
        <footer-comp />
    </div>
</template>
  
<script>
import { mapState } from 'vuex'
import Navbar from './layouts/Navbar.vue'
import FooterComp from './layouts/FooterComp.vue'
import TopNavbar from './layouts/TopNavbar.vue'

export default {
    components: { Navbar, FooterComp, TopNavbar },
    name: 'App',
    computed: {
        ...mapState('products', ['products'])
    }
}
</script>
<style >
.oswald-700 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
}
</style>