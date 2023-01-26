import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'
//import VueTinySlider from 'vue-tiny-slider';

// Vue.use(AOS)

const app = createApp(App);
app.use(AOS)
// app.use(VueTinySlider)

AOS.init();

app.mount('#app')
