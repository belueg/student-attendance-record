<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Layout/Navbar.vue'
import Footer from './components/Layout/Footer.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView />
  <Footer />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
</style>
