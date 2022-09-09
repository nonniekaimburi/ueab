<template>
    <div class="m-2">
        <router-link class="btn btn-ghost w-full " to="/tableview">{{  buttonText  }}</router-link>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    buttonText: {
        type: String,
        default: 'Landing Buttons',
    },
});
</script>