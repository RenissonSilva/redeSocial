<template>
    <div>
        <div class="col s12"> <h1>Post</h1></div>
    <ul class="col s12" v-for="pst of post" :key="pst.id">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
             
            </div>
            <div class="col s10">
              <span class="black-text">
                
                <li>{{pst.user}}</li>
                <li>{{pst.subtitle}}</li>
                <li>{{pst.mention_name_acc}}</li>
                <li>{{pst.location}}</li>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </ul>
    </div>
</template>

<script>
import Post from '../services/post';

export default {

 data: ()=>{
    return {
        post: []
    }     
 },
 mounted(){
     Post.list().then(res => {
         this.post = res.data;
     })
 }

}
</script>
