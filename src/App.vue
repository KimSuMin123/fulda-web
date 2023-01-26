<template>
  <div id="app">
    <PuldaHeader />
    <PuldaIntroduceFunctionOne />
    <PuldaIntroduceFunctionTwo />
    <PuldaDreamFill />
    <PuldaReview /> 
    <pulda-primium />
    <PuldaDevice />
    <PuldaDownload />
    <PuldaFooter />
</div>
</template>

<script>
  import PuldaHeader from './components/PuldaHeader.vue'
  import PuldaIntroduceFunctionOne from './components/PuldaIntroduceFunctionOne.vue';
  import PuldaIntroduceFunctionTwo from './components/PuldaIntroduceFunctionTwo.vue';
  import PuldaReview from './components/PuldaReview.vue';
  import PuldaDevice from './components/PuldaDevice.vue';
  import PuldaDownload from './components/PuldaDown.vue';
  import PuldaFooter from './components/PuldaFooter.vue';
import PuldaDreamFill from './components/PuldaDreamFill.vue';
import PuldaPrimium from './components/PuldaPrimium.vue';


 
  export default {
    name: 'App',
    components: {
    PuldaHeader,
    PuldaIntroduceFunctionOne,
    PuldaIntroduceFunctionTwo,
    PuldaReview,
    PuldaDevice,
    PuldaDownload,
    PuldaFooter,
    PuldaDreamFill,
        PuldaPrimium,
},
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
