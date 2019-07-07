<template>
<div>
 {{users.name}}
  <div class="col s12"> <h1>Add User</h1></div>
    <div class="row">
    <form  @submit.prevent="addForm" class="col s12" >
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Name" id="name" type="text" class="validate" v-model="users.name">
          <label for="name"></label>
        </div>
        <div class="input-field col s6">
          <input placeholder="Name Account" id="name_acc" type="text" class="validate" v-model="users.name_account">
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Password" id="password" type="password" class="validate" v-model="users.password">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Email" id="email" type="email" class="validate" v-model="users.email">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Telefone" id="telefone" type="number" class="validate" v-model="users.telefone">
        </div>
      </div>
       <button    class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
       </button>
    </form>
  </div>
</div>
  
</template>

<script>
import User from "../services/user";

export default {

    data: () => {
      return {
          users:{
            name:'',
            password:'',
            email:'',
            telefone: '',
            name_account:''
          }
      }
    },
    methods:{
      
       addForm(){
          User.add(this.users).then(res => {
          alert(res.data);
        })
      }
    }

}
</script>
