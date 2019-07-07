<template>
  <div id="cont">
     <div class="col s12"> <h1>Search</h1></div>
    <ul v-for="usr of user" :key="usr.id">
      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              
            </div>
            <div class="col s10">
              <span class="black-text">
              <li>{{usr.name_account}}</li>
              <li>{{usr.name}}</li>
              <li>{{usr.email}}</li>
              <li>{{usr.telefone}}</li>
  
              </span>
            </div>
          </div>
        </div>
      </div>

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