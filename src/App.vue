<template>
  <div id="app" class="row">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div class="col s2">
      <p>
        <router-link to="/search">
          <i class="medium material-icons">search</i>
        </router-link>
      </p>
    </div>
    <div class="col s2">
      <p>
        <router-link to="/profile">
          <i class="medium material-icons">home</i>
        </router-link>
      </p>
    </div>
    <div class="col s2">
      <p>
        <router-link to="/post">
          <i class="medium material-icons">add_box</i>
        </router-link>
      </p>
    </div>
    <div class="col s2">
      <p>
        <router-link to="/addpost">
          <i class="medium material-icons">add_a_photo</i>
        </router-link>
      </p>
    </div>
    <div class="col s2">
      <p>
        <router-link to="/adduser">
          <i class="medium material-icons">person_add</i>
        </router-link>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },

  mounted() {}
};
</script>

<style>
l3 {
  margin-left: 1%;
}
img {
  margin-left: 40%;
}
</style>
