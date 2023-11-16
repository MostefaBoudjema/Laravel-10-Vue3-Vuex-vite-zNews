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
import Navbar from './Navbar.vue'
import FooterComp from './FooterComp.vue'
import TopNavbar from './TopNavbar.vue'

export default {
    components: { Navbar, FooterComp, TopNavbar },
    name: 'FrontendLayout',
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