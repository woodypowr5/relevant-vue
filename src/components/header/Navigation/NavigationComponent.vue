<template>
    <div class="nav">
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
    .nav{
      height: 100px;
    }
</style>