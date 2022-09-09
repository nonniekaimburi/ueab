<template>
    <div 
    class="w-full h-full bg-no-repeat bg-cover"
    style=" background-image: url('../assets/image1.jpeg');">
    <div class="flex ">
        <div class="w-full">
            <ul>
                <li v-for="school in schools" :key="school">
                    <LandingButtons :buttonText="school" />
                </li>
            </ul>
        </div>
        <div class="w-full text-right">
            <router-link :to="{ path: '/addfile' }"><button class="btn btn-md btn-primary">+ Add File</button></router-link>
        </div>
    </div>
  </div>  
</template>
<script  setup lang="ts">
import LandingButtons from '../components/LandingButtons.vue';
const schools = [
    'School of Business',
    'School of Health Sciences',
    'School of Nursing',
    'School of Education, Humanities and Social Sciences',
    'School of Science and Technology',
];
</script>

