<template>
 <div id="app"> 
    <div @scroll="scrolling">
      <PuldaHeader ref="PuldaHeader" />
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
  data() {
    return {
      isScrollDown: false,   
      scrollTop: 0,                    
      target: null, 
      SizeDown : false
    }
  },
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
  },
  watch:{
    scrollTop(){
      if(this.scrollTop > 300){
        this.SizeDown = true;
        this.$refs.PuldaHeader.SizeDown = true;
        console.log(this.SizeDown);
        console.log(this.$refs.PuldaHeader.SizeDown);
        return this.SizeDown
      }
      if(this.scrollTop < 300){
        this.SizeDown = false;
        this.$refs.PuldaHeader.SizeDown = false;
        console.log(this.SizeDown);
        console.log(this.$refs.PuldaHeader.SizeDown);
        return this.SizeDown
      }
    }
  },

  methods: {
   scrollEvents() {
    //  console.log(document.documentElement.scrollTop)
     this.scrollTop = document.documentElement.scrollTop;
   }, 
  },
  mounted() {
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.scrollEvents);
  },
   unmounted() {
    document.removeEventListener('scroll', this.scrollEvents);
  },
};

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
#app::-webkit-scrollbar{
  display: none;
  overflow-x: none;
}
</style>
