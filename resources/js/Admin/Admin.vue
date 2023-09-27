<template>
    <div id="admin-div">
        <!-- <navbar/> -->
        <router-view />
    </div>
</template>
  
<script>
import { mapState } from 'vuex'
// import Navbar from './components/Navbar.vue'

export default {
    // components: { Navbar },
    name: 'App',
    computed: {
        ...mapState('products', ['products'])
    }
}
</script>
  