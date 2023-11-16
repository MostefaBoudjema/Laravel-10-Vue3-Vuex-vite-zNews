<template>
    <div id="admin-div">
      <Navlinks />
      <Sidebar />
      <main id="main" class="main">
        <router-view />
        <FooterComp />
      </main>
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  </template>
  
  <script setup>
  import Navlinks from './Navlinks.vue';
  import Sidebar from './Sidebar.vue';
  import FooterComp from './FooterComp.vue';
  </script>
  