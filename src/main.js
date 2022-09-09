import { initializeApp } from "firebase/app";
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import { firebaseConfig } from "./firebase/init";
import './index.css';

initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
