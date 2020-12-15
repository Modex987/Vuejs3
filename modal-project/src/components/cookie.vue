<template>

    <div id="cookie">
        <b><small>We use Cookies to make your experience better. Do you Agree ?</small></b>
        <button @click="handleCookie($event, true)">Yes</button>
        <button @click="handleCookie($event, false)">No</button>
    </div>

</template>


<script>

export default {
    name: 'cookie',

    data(){

    },

    methods:{
        handleCookie(e, cookieBool){
            if(cookieBool){
                alert('Cookies Have been set in your browser')
            }
            this.$emit('closeCookie')
        }
    }
}

</script>


<style scoped>
#cookie{
    border: black 1px solid;
    background-color: chartreuse;
    padding: .1em;
    border-radius: 4px 4px 0 0;
    position: absolute;
    bottom: 0;
    width: 99vw;
    margin: auth;
}

</style>