<template>
  <!-- <h1>The Job Id: {{$route.params.id}}</h1> -->
  <h1>The Job Id: {{id}}</h1>
</template>

<script>
export default {
    name:'JobDetails',

    props: {
        id:Number,
    },

    data(){
        return {
            // id: this.$route.params.id,
        }
    },
}
</script>

<style>

</style>