<template>
    <form class="border rounded p-4 mb-5" @submit.prevent="handleSubmit">
    <!-- <form class="border rounded p-4 mb-5" > -->
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password">
            <div class="alert alert-danger m-1" v-if="passwordError">
                {{passwordError}}
            </div>
        </div>
        <div class="mb-3">
            <label for="role" class="form-label">Select Job</label>
            <select class="form-select" id="role" v-model="role">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="checkbox" v-model="checkbox">
            <label class="form-check-label" for="checkbox">
                Accept <a href="#">Terms And Conditions</a>
            </label>
        </div>
        <div class="form-check mb-3">
            <small>Choose A name</small>
            <div class="border rounded mb-2">
                <input class="form-check-input" type="checkbox" value="Mourad" id="mourad" v-model="names">
                <label class="form-check-label" for="mourad">
                    Mourad kao
                </label>
            </div>
            <div class="border rounded mb-2">
                <input class="form-check-input" type="checkbox" value="ali" id="ali" v-model="names">
                <label class="form-check-label" for="ali">
                    Ali Doo
                </label>
            </div>
            <div class="border rounded mb-2">
                <input class="form-check-input" type="checkbox" value="Samir" id="samir" v-model="names">
                <label class="form-check-label" for="samir">
                    Samir Saoi
                </label>
            </div>
        </div>
        <div class="mb-3">
            <label for="skill">Skills</label>
            <input type="text" class="form-control" id="skill" v-model="skill" @keyup="addSkill" autocomplete="no">
            <div class="border rounded m-1 p-2">
                <span class="skill border rounded p-1 m-1" @click="deleteSkill(skl)" v-for="skl in skills" :key="skl">{{skl}}</span>
            </div>
        </div>
        <!-- <button type="submit" class="btn btn-outline-primary" @click.prevent="handleSubmit">Submit</button> -->
        <button type="submit" class="btn btn-outline-primary">Submit</button>
    </form>

    <div>
        <ul>
            <li><h4>skill: {{skill}}</h4></li>
            <li><h4>skills: {{skills}}</h4></li>
            <li><h4>email: {{email}}</h4></li>
            <li><h4>name: {{name}}</h4></li>
            <li><h4>role: {{role}}</h4></li>
            <li><h4>names: {{names}}</h4></li>
            <li><h4>password: {{password}}</h4></li>
            <li><h4>checkbox: {{checkbox}}</h4></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'SignupForm',

    data(){
        return {
            name:null,
            email:null,
            password:null,
            role:null,
            checkbox:false,
            names:[],
            skill:'',
            skills:[],
            passwordError:''
        }
    },

    methods:{
        addSkill(e){
            let skl = this.skill.replace(',', '').toLowerCase()
            if(e.key === ',' && skl){
                if(!this.skills.includes(skl)){
                    this.skills.push(skl)
                }
                this.skill = ''
            }
        },

        deleteSkill(skl){
            this.skills = this.skills.filter((elm)=>{
                return elm !== skl
            })
        },

        handleSubmit(){
            this.passwordError = this.passwordError.length > 4 ? '' : 'Paasword Length must be more than 5 Carachters'
        }
    }

}
</script>

<style scoped>
    form{
        max-width: 500px;
        margin: auto;
        background-color: #fff;
        border-radius: 5px;
    }

    form input{
        border: none;
        border-bottom: 1px solid rgb(179, 179, 179, 0.5);
        border-radius: 0;
    }

    form input:focus{
        border: none;
        border-bottom: 1px solid rgb(179, 179, 179, 0.5);
        border-radius: 0;
    }

    .skill{
        cursor: pointer;
    }
</style>