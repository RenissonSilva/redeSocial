<template>
  <div id="app">
     <p>
            <router-link to="/search">Search</router-link>
      </p>
      <p>
            <router-link to="/profile">Profile</router-link>
      </p>
    <router-view></router-view>
  </div>
   
</template>

<script>

export default {

  name: 'app',
  data(){
    return {
      
      
    }

  },

  mounted(){
   
  }

}
</script>

<style>

</style>
