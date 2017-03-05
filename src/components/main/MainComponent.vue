<template>
  <div class="main-component">
    <router-view></router-view>
  </div>      
</template>

<script>
  import HomeComponent from './home/HomeComponent.vue'
  import AboutComponent from './about/AboutComponent.vue'
  import WorkComponent from './work/WorkComponent.vue'

  export default {
    computed: {
      count () {
        // return this.$store.state.count
      }
    },
    data () {
      return {
        activeDisplay: 'profile'
        // title: '',
        // description: '',
        // id: this.$route.params.id,
        // heading: 'Add Profile'
      }
    },
    components:{
      HomeComponent,
      AboutComponent,
      WorkComponent
    },
    created () {
   
    },
    methods: {
   
    }
  }
</script>
<style lang="less">
    .main-component{
      padding: 2em;
      background-color: #EEE;
    }
</style>
