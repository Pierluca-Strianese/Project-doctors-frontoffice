<script>
import axios from 'axios';
import Appcard from './AppCard.vue';
import { store } from '../store';

export default {

    components: {
        Appcard,
    },

    data() {
        return {
            arrUsers: [],
            currentPage: 1,
            nPages: 0,
            store,
        }
    },

    methods: {
        changePage(page) {
            this.currentPage = page;
            this.getUsers();
        },

        getUsers() {
          
            axios
                .get(this.store.baseUrl + 'api/users', {
                    params: {
                        page: this.currentPage,
                        q: this.store.search,
                        // specialization: this.specializationId,
                    },
                })
                .then(response => {
                    this.arrUsers = response.data.results.data;
                    this.nPages = response.data.results.last_page;
                });
        },
    },

    
    watch: {
        currentPage() {
            this.getUsers();
        },
        "store.search"() {
			this.getUsers();
		},

    },

    created() {
        this.getUsers();
    },

};
</script>

<template>
    <div class="d-flex m-5">
       
        <Appcard  v-for="user in arrUsers" :key="user.id" :user="user" />
        
       
    </div>

    <div class="nav_bar mt-5">
        <nav>
            <ul class="pagination pagination-sm">
                <li v-for="page in nPages" :key="page" class="page-item" :class="{ active: page == currentPage }">
                    <span class="page-link" @click="changePage(page)">{{ page }}</span>
                </li>

            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.list {
    display: flex;
}

.nav_bar {
    display: flex;
    justify-content: center;
}
</style>