<template>
    <div id="admin-div">
        <Navlinks />
        <sidebar />

        <main id="main" class="main">
            <!-- <child /> -->
            
        <router-view />
            <footer-comp />
        </main><!-- End #main -->

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>
    </div>
</template>
  
<script>
import { mapState } from 'vuex'
import Navlinks from './Navlinks.vue'
import Sidebar from './Sidebar.vue'
import footerComp from './FooterComp.vue'

export default {
    components: { Navlinks, Sidebar, footerComp },
    name: 'App',
    computed: {
        ...mapState('products', ['products'])
    }
}
</script>
<style scoped></style>
  