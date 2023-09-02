<script>
import axios from 'axios';
import { store } from "../store";


export default {
    data(){
        return{
            store,
            is404: false,
            user: [],
        };
    },

    methods: {
        getUsers(){
             axios
            .get(this.store.baseUrl + 'api/users/' + this.$route.params.slug)
            .then((response) => {
                this.user = response.data.results;
                console.log(this.user);
            });
        
        }, 
    },

    created() {
       this.getUsers();
        
    }, 
    


}

</script>

<template>
     
   
    <div>
        <h1>{{ user.name }}</h1>
        <h1>{{ user.lastname }}</h1>
    </div>


    
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
</style>