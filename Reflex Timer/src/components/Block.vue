<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      <h1>Click Me!</h1>
  </div>
</template>

<script>
export default {
    name:'Block',

    props:{
        delay:Number
    },

    data(){
        return{
            showBlock:false,
            timer:null,
            reactionTime:0
        }
    },

    methods:{
        startTimer(){
            this.timer = setInterval(()=>{
                this.reactionTime += 1
            }, 1)
        },

        stopTimer(){
            clearInterval(this.timer)
            // this.showBlock = false // not here
            this.$emit('end', this.reactionTime)
        }
    },

    mounted(){
        setTimeout(()=>{
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },

    updated(){
        console.log('Updated')
    },

    unmounted(){
        console.log('UnMounted')
    }

}
</script>

<style>

    .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }

</style>