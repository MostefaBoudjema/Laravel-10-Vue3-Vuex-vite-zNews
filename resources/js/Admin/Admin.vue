<template>
    <div id="admin-div">
        <!-- <Navlinks />
        <sidebar />

        <main id="main" class="main">
            <router-view />
            <footer-comp />
        </main>

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a> -->
            <router-view />
    </div>
</template>
  
<script>
// import { mapState } from 'vuex'
import Navlinks from './layouts/Navlinks.vue'
import Sidebar from './layouts/Sidebar.vue'
import footerComp from './layouts/FooterComp.vue'

export default {
    components: { Navlinks, Sidebar, footerComp },
    name: 'Admin',
    // computed: {
    //     ...mapState('products', ['products'])
    // }
}
</script>
<style scoped></style>
  