<script setup>
import { RouterView } from 'vue-router';
import FooterComponent from "./components/FooterComponent.vue";
import NavBar from "./components/NavBar.vue";

</script>

<template>
  <header>
    <div>
      <NavBar />
    </div>
  </header>
  <div class="px-8">
    <RouterView />
  </div>

  <div>

  </div>
  <FooterComponent />
</template>


