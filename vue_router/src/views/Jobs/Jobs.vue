<template>

  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
      <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <h2>{{job.title}}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
    name:'Jobs',

    data(){
        return {
            jobs:[
                {title:'Softwear Ingeneer', id:1, details:'Develop softwear for companies'},
                {title:'Teacher', id:2, details:'trying to fucking teach poeple kids'},
                {title:'Doctor', id:3, details:'trying to fucking give medicaments to ill poeple'},
            ]
        }
    }
}
</script>

<style>

</style>