<template>
  <div class="app-root">
    <header-component></header-component>
    <main-component> </main-component>
    <footer-component></footer-component>
  </div>  
</template>

<script>

  import HeaderComponent from './components/header/HeaderComponent.vue'
  import MainComponent from './components/main/MainComponent.vue'
  import FooterComponent from './components/footer/FooterComponent.vue'
  // import * as services from '../services'
  // import * as store from '../store/store.js'
  
  export default {
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    }
  }
</script>

<!--Global styles-->
<style lang="less">
  /*@import './../assets/appGlobal.less';*/
  .app-root{
    /*.centered;*/
    /*position: relative;*/
  }
  
</style>

