import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'


// Vue.use(AOS)

const app = createApp(App);
app.use(AOS)

AOS.init();
app.mount('#app')
