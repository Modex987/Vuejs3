<template>

  <!-- <h1>The Job Id: {{$route.params.id}}</h1> -->
  <div v-if="job">
    <h1>The Job Id: {{job.id}}</h1>
    <h1>The Job Id: {{job.jobId}}</h1>
    <h1>The Job Title: {{job.title}}</h1>
    <h1>The Job completed: {{job.completed}}</h1>
  </div>
  <div v-else>
      <h1>Loading ...</h1>
  </div>

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
            job: null,
        }
    },

    mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
    .then(res => res.json())
    .then(job => this.job = job)
    .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>