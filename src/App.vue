
<template>
  <div v-bind:style='{ backgroundImage: `url("${backgroundImages[bgIndex]}")` }' id="app">
    
    <div class = 'row'>
      <div class = 'col-sm-7'>
      </div>
      <div class = 'col-sm-5'>
        <div class ='main text-center'>
            <h1>Save the Date</h1>
            <transition name="fade" mode="out-in">
            <router-view @homeBg="homeBg" @menuBg="menuBg"></router-view>
            </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
     },
  data:
    function(){
      return {
        item:'data',
        loginStatus: false,
        backgroundImages :
                [
                  "https://raw.githubusercontent.com/nspilman/saveTheDate/master/src/assets/background.png",
                  "https://raw.githubusercontent.com/nspilman/saveTheDate/master/src/assets/background2.png",
                ],
        bgIndex:0,

      }
    },
    methods:{
      loggedIn(){
        this.loginStatus = true
      },
      homeBg(){
        this.bgIndex=0;
      },
      menuBg(){
        this.bgIndex =1;
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

h1 {
    color:white !important;
}

.main{
    display:flex !important;
    justify-content: center;
    margin-top:50%;
    width: 90%;
    height:30vh;
    flex-direction: column;
    align-content: center;
    background-color: rgb(0,0,0,.2)
}

@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";

</style>
