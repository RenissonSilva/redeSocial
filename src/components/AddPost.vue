<template>
    <div>
      <div class="col s12"> <h1>Add Post</h1></div>
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Subtitle" id="Subtitle" type="text" class="validate">
        </div>
        <div class="input-field col s6">
          <input placeholder="Mention" id="Mention" type="text" class="validate">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Location" id="location" type="text" class="validate">
        </div>
      </div>
      
      <button @click="addForm"   class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
       </button>
    </form>
  </div>
    </div>
</template>
