<template>
    <div>
      <div class="" v-bind:class="{ active: activeView === 'home' }" @click="setActiveView('home')">Home</div>
      <div class="" v-bind:class="{ active: activeView === 'about' }" @click="setActiveView('profile')">Profile</div>
      <div class="" v-bind:class="{ active: activeView === 'work' }" @click="setActiveView('matches')">Matches</div>
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
    
</style>