<template>
    <div class="header container">
	    <logo-component></logo-component>
      	<navigation-component></navigation-component>
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
	.header-component{
		// min-height: 4em;
		background-color: #CCC;
	}
</style>
