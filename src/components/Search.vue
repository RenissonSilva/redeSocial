<template>
  <div id="cont">
    <h1>Search</h1>
    <ul v-for="usr of user" :key="usr.id">
      <li>{{usr.id}}</li>
      <li>{{usr.name}}</li>
      <li>{{usr.password}}</li>
      <li>{{usr.email}}</li>
      <li>{{usr.telefone}}</li>
      <li>{{usr.name_account}}</li>

    </ul>
  </div>
</template>


<script>
import User from "../services/user";

export default {

  data(){
    return {
      
      user: []
    }

  },

  mounted(){
    User.list().then(res=> {
      this.user = res.data;
    })
  }

}
</script> 