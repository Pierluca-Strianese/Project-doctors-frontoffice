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

    mounted() {
        const id = this.$route.params.id;

        axios
            .get(`${this.store.baseUrl}api/doctosrs/${id}`)
            .then(response => {
                if (response.data.success == true) {
                    this.doctor = response.data.doctor;
                    this.stats = response.data;
                    console.log(this.stats.average_stars);


                } else {
                    this.$router.push({ name: 'not-found' });
                }
            })

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
    <h1> {{ arrDoctors.name }} </h1>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
</style>