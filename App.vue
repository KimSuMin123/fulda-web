<template>
 <div id="app">
    <PuldaHeader />
    <PuldaStart />
    <PuldaIntroduceOne />
    <PuldaIntroduceTwo />              
    <PuldaIntroduceFunctionOne />
    <PuldaIntroduceFunctionTwo />
    <PuldaDreamFill />
    <PuldaReview /> 
    <PuldaPremium />
    <PuldaDevice />   
    <PuldaFooter />
  </div>
</template>

<script>
import PuldaHeader from './components/PuldaHeader.vue';
import PuldaStart from './components/PuldaStart.vue';
import PuldaIntroduceOne from './components/PuldaIntroduceOne.vue';
import PuldaIntroduceTwo from './components/PuldaIntroduceTwo.vue';
import PuldaIntroduceFunctionOne from './components/PuldaIntroduceFunctionOne.vue';
import PuldaIntroduceFunctionTwo from './components/PuldaIntroduceFunctionTwo.vue';
import PuldaDreamFill from './components/PuldaDreamFill.vue';
import PuldaReview from './components/PuldaReview.vue';
import PuldaPremium from './components/PuldaPremium.vue';
import PuldaDevice from './components/PuldaDevice.vue';
import PuldaFooter from './components/PuldaFooter.vue';
export default {
  name: 'App',
  components: {
    PuldaHeader,
    PuldaStart,
    PuldaIntroduceOne,
    PuldaIntroduceTwo,
    PuldaIntroduceFunctionOne,
    PuldaIntroduceFunctionTwo,
    PuldaDreamFill,
    PuldaReview,
    PuldaPremium,
    PuldaDevice,
    PuldaFooter
}
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
