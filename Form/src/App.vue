<template>
  <SignupForm />
</template>

<script>
import SignupForm from './components/SignupForm.vue';

export default {
  components:{
    SignupForm
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-color: #eee;
}
</style>