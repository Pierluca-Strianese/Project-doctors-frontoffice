<script>

import AppCard from "../components/AppCard.vue";
import axios from 'axios';
import { store } from '../store';

export default {

    components: {
        AppCard,
    },

    data() {
        return {
            arrUsers: [],
            searchQuery: '',
            store,
        };
    },

    
    methods: {
        changePage(page) {
            this.currentPage = page;
            this.getUsers();
        },

        getUsers() {
            this.loader = true
            axios
                .get(this.store.baseUrl + 'api/users', {
                    params: {
                        page: this.currentPage,
                        q: this.searchQuery,
                    },
                })
                .then(response => {
                    this.arrUsers = response.data.results.data
                    this.nPages = response.data.results.last_page
                    this.loader = false;
                });
        },
    },

    
    watch: {
        currentPage() {
            this.getUsers();
        },
    },

    
    
}

</script>

<template>
    <div>
        <form class="d-flex" @submit.prevent="getUsers">
            <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Cerca per nome o specializzazione" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Cerca</button>
        
        </form>
        <AppCard />
    </div>
    
</template>

<style lang="scss" scoped>

</style>