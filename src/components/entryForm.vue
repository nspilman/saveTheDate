<template>
    <div class ='main text-center'>
        <h1>Save the Date</h1>
        <router-view></router-view>
    </div>
</template>


<script>

export default {
  name: "login",
  components:{ 
  },
  props: {
    msg: String,
    loginStatus:Boolean
  },
  methods:{
      loggedIn(){
          this.$emit('login')
      }
  }
};
</script>

<style>
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

</style>
