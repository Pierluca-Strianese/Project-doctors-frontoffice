<script>
import axios from 'axios';
import { store } from "../store";

export default {
    data() {
        return {
            arrDoctors: [],
            currentPage: 1,
            nPages: 0,
            store,
        };
    },

    methods: {
        getUsers() {
            axios
                .get(this.store.baseUrl + 'api/users/?i=', {
                    params: {
                        i: this.id,
                    },
                })
                .then(response => {
                    this.arrDoctors = response.data.result.data
                    this.nPages = response.data.result.last_page
                });
        },
    },
    watch: {
        currentPage() {
            this.getUsers();
        },
    },
    created() {
        this.getUsers();
    }
}

</script>

<template>
    <h1> SONO LO SHOW </h1>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
</style>