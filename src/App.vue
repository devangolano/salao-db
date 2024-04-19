<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navebar from './components/Navebar.vue'
import Banner from './components/Banner.vue';
import Home from './components/Home.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <Navebar />
      <Banner />
      <Home />

    </div>
  </header>

  <RouterView />
</template>
