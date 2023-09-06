<script>
import axios from 'axios';
import Appcard from './AppCard.vue';
import AppFilter from "./AppFilter.vue";
import { store } from '../store';

export default {

    components: {
        Appcard,
        AppFilter,
    },

    data() {
        return {
            arrUsers: [],
            arrSpecializations: [],
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
                        specialization: this.specializationId,
                    },
                })
                .then(response => {
                    this.arrUsers = response.data.results.data;
                    this.nPages = response.data.results.last_page;
                });
        },

        getSpecializations() {
			axios.get(this.store.baseUrl + "api/specializations").then((response) => {
				this.arrSpecializations = response.data.results;
			});
		},

        manageChangeSpecialization(specializationId) {
			this.specializationId = specializationId;
			this.getUsers();
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
        this.getSpecializations();
    },
};
</script>

<template>

    <AppFilter
		:arrSpecializations="arrSpecializations"
		@changeSpecialization="manageChangeSpecialization($event)" 
    />

    <div class="d-flex justify-content-center m-5 flex-wrap">
        <div v-for="user in arrUsers" :key="user.id">
            <Appcard v-if="user.doctor.promotion_counter >= 1" :user="user" :objUser="user" class="mb-4" />
        </div>
    </div>

    <!-- <div class="d-flex justify-content-center m-5">
        <div class="scrollable-container" style="overflow-x: scroll;">
            <div class="d-flex">
                <div v-for="user in arrUsers" :key="user.id">
                    <Appcard v-if="user.doctor.promotion_counter >= 1" :user="user" :objUser="user" />
                </div>
            </div>
        </div>
    </div> -->

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