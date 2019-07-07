import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Post from "./components/Post";
import  AddPost from "./components/AddPost";
import AddUser from "./components/AddUser";

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/profile' , component : Profile},
    {path: '/search' , component: Search},
    {path: '/post' , component: Post},
    {path: '/adduser', component: AddUser},
    {path: '/addpost', component: AddPost}

  ]

});


//router.start(App, $mount('#app'));


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
