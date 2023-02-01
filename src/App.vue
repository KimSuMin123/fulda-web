<template>
  <div id="app">
    <PuldaHeader />
    <PuldaIntroduceFunctionOne />
    <PuldaIntroduceFunctionTwo ref="PuldaIntroduceFunctionTwo"/>
    <PuldaDreamFill />
    <PuldaReview /> 
    <pulda-primium ref="PuldaPrimium"/>
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
    data() {
    return {
      isScrollDown: false,   
      scrollTop: 0,                    
      target: null, 
      SlideOne : false,
      SlideTwo : false
    }
  },
    components: {
    PuldaHeader,
    PuldaIntroduceFunctionOne,
    PuldaIntroduceFunctionTwo,
    PuldaReview,
    PuldaDevice,
    PuldaDownload,
    PuldaFooter,
    PuldaDreamFill,
    PuldaPrimium
},
watch:{
    scrollTop(){
      // console.log(this.scrollTop)
      if(this.scrollTop > 6700){
        this.$refs.PuldaPrimium.SlideTwo = true;
        return this.SlideTwo
      } 
      if(this.scrollTop < 4230){
        this.$refs.PuldaIntroduceFunctionTwo.SlideOne = false;
   
        return this.SlideOne
      }
      if(4230 < this.scrollTop < 6700){
        this.$refs.PuldaIntroduceFunctionTwo.SlideOne = true;
        this.$refs.PuldaPrimium.SlideTwo = false;
        return this.SlideOne, this.SlideTwo
      }
      
    
    },
  },

  methods: {
   scrollEvents() {
    //  console.log(document.documentElement.scrollTop)
     this.scrollTop = document.documentElement.scrollTop;
   }
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
</style>
