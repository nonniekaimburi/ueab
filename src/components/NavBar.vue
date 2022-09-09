<template>
  <div class="w-full flex justify-between p-4 ">
    <router-link to="/" class="text-2xl font-bold btn btn-ghost ">UEAB<span class="text-primary">FILES</span></router-link>
    <div>
      <div v-if="isLoggedIn" @click="isLoggedIn=!isLoggedIn" class="avatar">
        <div class="w-12 rounded-full">
          <img alt="avatar" src="https://placeimg.com/192/192/people"/>
        </div>
      </div>
      <!-- <ul v-else>
        <li @click="isLoggedIn=!isLoggedIn" class="btn btn-primary">
          <router-link to="/login">Login</router-link>
        </li>        
      </ul> -->
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const isLoggedIn = ref(false);
</script>

<style scoped>

</style>
