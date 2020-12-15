<template>
  <div class="home">
    <p ref="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex unde veritatis
        fugit obcaecati dolorem voluptatum eligendi. Dolores temporibus consectetur ducimus
        delectus, tenetur iste eaque a, neque obcaecati commodi nostrum.
    </p>
    <h1>My name is {{ name }} and i'm {{ age }} | {{ email }}</h1>
    <button @click="handleClick">Click here</button>
    <hr>
    <label for="email">email</label>
    <input type="email" id="email" v-model="email"><br>
    <label for="">name</label>
    <input type="test" id="name" v-model="name"><br>
    <button @click="age++">Increase Age</button>
    <!-- <hr>
    <p>{{ninjaOne.name}} Age: {{ninjaOne.age}}</p>
    <button @click="updateNinjaOne">Update Ninja</button> -->
    <hr>
    <p>{{ninjaTow.name}} Age: {{ninjaTow.age}}</p>
    <button @click="updateNinjaTow">Update Ninja</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  setup(){
    /* The 'this' keyword Is not available inside the setup method */
    // not reactive values.
    let name = 'Mourad EL CADI',
      age = 22

    // we use refs to add reactivity to variables inside setup
    let email = ref('example@email.com')
    
    let handleClick = () => {
      // console.log(p.value)
      p.value.classList.toggle('test')
      email.value = 'mourad@mail.com'
      age = 235
    }

    const p = ref(null)

    // **********************************************************

    const ninjaOne = ref({ name: 'mario', age: 30 })

    let updateNinjaOne = ()=>{
      ninjaOne.value.age = 40
    }


    // **********************************************************

    // reactive doesn' accept primitive values like 'str' or 123
    // let x = reactive(123) or y = reactive('Mourad') this won't work

    const ninjaTow = reactive({ name: 'mario', age: 30 })

    let updateNinjaTow = ()=>{
      // we don't use value property
      ninjaTow.age = 40
    }


    // **********************************************************

    return { name, age, handleClick, p, email }
  }
}
</script>


<style scoped>

.test{
  color: red;
  background-color: blue;
  font-weight: bolder;
}

</style>