<template>
    <div class ='main text-center'>
        <h1>Save the Date</h1>
        <login-form></login-form>
        </div>
</template>


<script>
import loginForm from "./loginForm.vue";

export default {
  name: "login",
  components:{ 
      loginForm
  },
  props: {
    msg: String
  }
};
</script>

<style>
h1 {
    color:white !important;
    font-size:100em;
}

.main{
    display:flex !important;
    justify-content: center;
    height:100vh;
    flex-direction: column;
    align-content: center;
}

</style>
