<template>
    <div class="navigation-wrapper">
      <div class="navigation-link column" v-bind:class="{ active: activeView === 'home' }" @click="setActiveView('home')">Home</div>
      <div class="navigation-link column" v-bind:class="{ active: activeView === 'about' }" @click="setActiveView('profile')">Profile</div>
      <div class="navigation-link column" v-bind:class="{ active: activeView === 'work' }" @click="setActiveView('matches')">Matches</div>
    </div>
</template>

<script>
    
    export default{
      methods: {
        setActiveView (newView) {
          // this.$store.dispatch('setActiveView', {
          //   newView: newView
          // })
        }
      },
      computed: {
        activeView () {
          // return this.$store.state.navigation.activeView
        }
      }, 
      created() {
        
      }
    }
</script>

<style lang="less">
  
  // .navigation-wrapper{
  //   .centered;
  //   justify-content: space-around;
  //   background-color: @color2;
  //   position: relative;
  // }
  // .navigation-link{
  //   flex-grow: 2;
  //   color: @color4;
  //   font-weight: bold;
  //   text-align: center;
  // }
  // .navigation-link:hover{
  //   color: white;
  //   background-color: darken(@color3, 20%); 
  //   cursor: pointer;
  // }

  // .navigation-link.active{ // should overwrite :hover
  //   background-color: @subdued-dark;
  //   color: white;
  // }
</style>