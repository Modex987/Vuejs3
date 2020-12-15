<template>

  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handle">Click Here</button>
  <button @click="visibleModal=true">Click To Show</button>
  <!-- Cookie -->
  <button @click="showCookieMsg=true">Show Cookie</button>
  <hr>

  <modal :pophead="pophead" :poptitle="poptitle" :message="popmessage" :isdark="true" v-if="visibleModal" @close="visibleModal=false">
    <template v-slot:links>
        <a href="#">Click To Join A</a>
        <a href="#">Click To Join B</a>
    </template>
    <!-- the following will go inside the default slot -->
    <h2>The default Slot </h2>
    <ul>
      <li>List Item</li>
      <li>List Item</li>
    </ul>
  </modal>

  <cookie v-if="showCookieMsg" @closeCookie="showCookieMsg=false" />
  
</template>


<script>
import modal from './components/Modal.vue'
import cookie from './components/cookie.vue'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    modal,
    cookie,
  },

  data(){
    return {
      popmessage:'some random shit goes here',
      title:'My App is quit Good :)',
      poptitle:'The Pop Up title',
      pophead:'The Pop Up head',
      visibleModal:false,
      showCookieMsg:false
    }
  },

  methods: {
    handle() {
      console.log(this.$refs.name)
      this.$refs.name.classList.toggle('foo')
    }
  }
}

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0;
}

.foo{
  padding: 2rem;
  background-color: red;
}

button{
  margin: 1em;
  border: none;
  background-color: blue;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color:white;
  cursor: pointer;
}

</style>
