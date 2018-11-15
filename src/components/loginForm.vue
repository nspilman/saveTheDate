<template>
<div>
 <input class = 'nameInput'>
 <input class = 'nameInput'>
 
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

.nameInput{
    margin:3px;
}

</style>
