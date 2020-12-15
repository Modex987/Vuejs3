<template>
  <div class="result">
      <span><h2>Your Score Is:</h2></span><span>{{score}}</span>
  </div>
</template>

<script>
export default {
    name:'Result',

    props:{
        score:Number
    }

}
</script>

<style>

    .result{
        background-color:greenyellow ;
        padding:1rem;
        max-width:400px ;
        margin: 1rem auto;
    }

</style>