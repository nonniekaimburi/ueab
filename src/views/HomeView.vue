<script setup>
import { getApp, getApps } from "@firebase/app";
import { useAuth } from '@vueuse/firebase/useAuth';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { ref } from "vue";
// import { router } from 'vue-router';

const isLoggedIn = ref(false);
const departments = ref([
  'School of Business',
  'School of Health Sciences',
  'School of Nursing',
  'School of Education, Humanities and Social Sciences',
  'School of Science and Technology',
]);

const app = getApps().length > 0 ? getApps()[0] : getApp();
console.log(app);
const auth = getAuth();
const { isAuthenticated, user } = useAuth(auth)
const signIn = () => {
  signInWithPopup(
    getAuth(app), new GoogleAuthProvider(),
  );

};

onAuthStateChanged(auth, user => {
  if (user) {
    // router.push('/table')
  } else {
    // router.push('/')
  }
})
const signOut = () => auth.signOut();
</script>

<template >
  <div 
    class="w-full h-full bg-no-repeat bg-cover bg-fixed " 
    style="background-image: url('../assets/image2.jpg');">

    <pre v-if="isAuthenticated">User Object{{ user }}
    <div>
      <button @click="signOut" class="btn btn-error">Sign Out</button>
    </div>
    </pre>
    <div v-else class=" min-h-screen flex justify-center items-center text-center ">
      <div>
        <p class="font-bold text-xl md:text-4xl mx-4">Welcome to UEAB</p>
        <p class="mb-8">This is UEAB File System.</p>
        <li @click="signIn" class="btn btn-primary">
          Log In to get started.
        </li>
      </div>
    </div>
</div>
</template>
