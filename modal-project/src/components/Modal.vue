<template>
  <div class='backdrop' ref="backdrop" @dblclick.self="checkToClose">
    <div class="modal" :class="{darkmodal: isdark}">
      <h1>{{poptitle}}</h1>
      <h2>{{pophead}}</h2>
      <hr>
      <p>{{ message }}</p>
      <hr>
      <!-- The default Slot -->
      <slot></slot>
      <hr>
      <!-- The Costum Slots -->
      <slot name="links"></slot>
      <hr>
      <button>Allow</button>
      <button @click="checkToClose">Close</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'modal',

  props: {
    msg: String,
    poptitle:String,
    pophead:String,
    message:String,
    isdark:Boolean,
  },

  data(){
    return {
      // 
    }
  },

  methods:{
    checkToClose(){
      // if(e.target == e.currentTarget && e.target == this.$refs.backdrop){
      //   // this.$refs.backdrop.remove()
      //   this.$emit('closepop')
      // } # without self 'Modifier'
      this.$emit('close')
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.backdrop{
  background-color: rgb(0, 0, 0, 0.5);
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal{
  background-color: #eeeeee;
  width: 300px;
  padding: 1rem;
  border: none;
  border-radius: 5px;
}

.darkmodal{
  background-color: black;
  color: white;
}

</style>