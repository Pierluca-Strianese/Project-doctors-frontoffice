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
            users: [],
            currentPage: 1,
            perPage: 5,
            isLoading: false,
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
            this.loader = true
            axios
                .get(this.store.baseUrl + 'api/users', {
                    params: {
                        page: this.currentPage,
                        q: this.store.search,
                    },
                })
                .then(response => {
                    this.arrUsers = response.data.results.data
                    this.nPages = response.data.results.last_page
                    this.loader = false;
                });
        },

        handleScroll() {
            const container = this.$refs.scrollContainer;
            if (container) {
                const containerHeight = container.offsetHeight;
                const scrollTop = window.scrollY;
                const windowHeight = window.innerHeight;
                const distanceFromBottom = containerHeight - (scrollTop + windowHeight);
                if (distanceFromBottom < 200 && !this.isLoading) {
                    this.loadMoreData();
                }
            }
        },

        loadMoreData() {
            this.isLoading = true;
            setTimeout(() => {
                const startIndex = (this.currentPage - 1) * this.perPage;
                const newData = arrUsers.slice(startIndex, startIndex + this.perPage);
                this.users = [...this.users, ...newData];
                this.currentPage++;
                this.isLoading = false;
            }, 1000);
        },
    },


    watch: {
        currentPage() {
            this.getUsers();
        },

        "store.search"() {
            this.getProjects();
        },
    },

    created() {
        this.getUsers();
        window.addEventListener('scroll', this.handleScroll);
        this.loadMoreData();
    },

    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    computed: {
        paginatedUsers() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.arrUsers.slice(startIndex, endIndex);
        },
    },


};
</script>

<template>
    <!-- <div class="d-flex justify-content-center m-5">
        <div v-for="user in arrUsers" :key="user.id">
            <Appcard v-if="user.doctor.promotion_counter >= 1" :user="user" :objUser="user" />
        </div>
    </div> -->

    <div class="d-flex justify-content-center m-5" ref="scrollContainer">
        <div v-for="(user, index) in users" :key="user.id">
            <Appcard v-if="user.doctor.promotion_counter >= 1" :user="user" :objUser="user" />
        </div>
        <div v-if="isLoading" class="loading-indicator">Caricamento...</div>
    </div>

    <!-- <div class="nav_bar mt-5">
        <nav>
            <ul class="pagination pagination-sm">
                <li v-for="page in nPages" :key="page" class="page-item" :class="{ active: page == currentPage }">
                    <span class="page-link" @click="changePage(page)">{{ page }}</span>
                </li>

            </ul>
        </nav>
    </div> -->
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