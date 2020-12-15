<template>

  <h1>Test Your Reflex</h1>
  <button @click="start" :disabled="isPlaying">Play</button>

  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Result v-if="showResult" :score="score" />

</template>

<script>

import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',

  components: {
    Result,
    Block
  },

  data(){
    return {
      isPlaying: false,
      delay: null,
      score:null,
      showResult:false,
    }
  },

  methods:{
    start(){
      this.isPlaying = true
      this.delay = 3000 + Math.random() * 1000
      this.showResult = false
    },

    endGame(reactionTime){
      this.isPlaying = false
      this.score = reactionTime
      this.showResult = true
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
}
</style>
