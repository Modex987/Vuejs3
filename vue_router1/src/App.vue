<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <router-link :to="{name: 'About'}">About</router-link> |
    <router-link :to="{name: 'Jobs'}">Jobs</router-link> |
    <router-link to="/all-jobs">All-Jobs</router-link>
  </div>
  <div>
    <button @click="redirect">Redirect</button>
    <button @click="back">Go Back</button>
    <button @click="forward">Go Forward</button>
  </div>
  <router-view/>
</template>


<script>
export default {
  methods: {
    redirect(){
      this.$router.push({name: 'Home'})
    },

    back(){
      // this.$router.go(-2) // 2 steps back
      this.$router.go(-1)
    },

    forward(){
      this.$router.go(1)
    }
  }
}
</script>


<style>

body{
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #63dfa7;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.home{
  max-width: 500px;
  margin: 0 auto;
}

button{
  padding: 1em;
  margin: 1em;
  background-color: blue;
  color:white;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

</style>
