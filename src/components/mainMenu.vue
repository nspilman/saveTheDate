<template>
    <div class ='mainMenu text-center'>
        <h1> July 13, 2018 </h1>
        <h2>Madison, Wi </h2>
        <button class = 'menuButton' v-for="button in menuButtons">{{button}}</button>
    </div>
</template>


<script>
export default {
  name: "login",
  data: function(){
      return {
          menuButtons:['Our Story','Hotels and Activities','the Registry','the Food']
      }
  },
  components:{ 
    
  },
  props: {
     },
  methods:{
     
    },    
};
</script>

<style scoped>
h1,h2 {
    color:white !important;
    box-shadow: 1in;
}
.menuButton{
    width: 45%;
    background-color: #3E6F7A;
    margin:2px;
}

.menuButton:hover{
    background-color: #9AA8B3;
}

#app {
  background-image:url('../assets/background2.png');
}

</style>
