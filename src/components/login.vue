<template>
    <div class ='main text-center'>
        <h1>Save the Date</h1>
        </div>
</template>


<script>
export default {
  name: "login",
  props: {
    msg: String
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
    height:100vh;
    flex-direction: column;
    align-content: center;
    font-size:100em;
}

</style>
