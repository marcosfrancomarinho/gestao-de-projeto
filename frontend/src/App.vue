<script setup lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>