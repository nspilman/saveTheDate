
<template>
  <div v-bind:style='{ backgroundImage: `url("${backgroundImage}")` }' id="app">
    
    <div class = 'row'>
      <div class = 'col-sm-7'>
      </div>
      <div class = 'col-sm-5'>
        <entry-form v-on:login="loggedIn" :loginStatus="loginStatus"></entry-form>
      </div>
        
    </div>
  </div>
</template>

<script>
import entryForm from "./components/entryForm.vue";


export default {
  name: "app",
  components: {
    entryForm
  },
  data:
    function(){
      return {
        item:'data',
        loginStatus: false,
        backgroundImage :"../assets/background.png",
      }
    },
    methods:{
      loggedIn(){
        this.loginStatus = true
      }
    },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  background-size: 100% auto;
}
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";

</style>
