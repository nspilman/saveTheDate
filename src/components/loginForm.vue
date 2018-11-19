<template>
<div>
 <input class = 'nameInput'>
 <input class = 'nameInput'>
 <br>
 <router-link to="main" tag="button" active-class="active" class ="login" exact>Submit</router-link>
        </div>
</template>


<script>
export default {
  name: "login",
  props: {
    msg: String
  },
  methods:{
      loginBg(){
          this.$emit('homeBg')
      }
  },
  created:function(){
      this.loginBg()
  }
};
</script>

<style>
h1 {
    color:white !important;
}

.login{
    background-color:#BA7857;

}

.nameInput{
    margin:3px;
}

</style>
