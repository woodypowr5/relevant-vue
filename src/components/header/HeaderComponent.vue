<template>
    <div class="header">
      <div class="nav container">

  	    <logo-component></logo-component>
        <navigation-component></navigation-component>
      </div>
    </div>
</template>

<script>
	import LogoComponent from './logo/LogoComponent.vue'
	import NavigationComponent from './navigation/NavigationComponent.vue'
  	
  	export default {
    	components:{
    		NavigationComponent,
    		LogoComponent
    	},
    	methods: {
      
    	}
  	}
</script>
<style lang="less">
	.header{
		background-color: #CCC;
  }
  .nav{
    background-color: inherit;
    justify-content: space-between;
  }
</style>
