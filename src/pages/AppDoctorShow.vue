<script>
import axios from 'axios';
import { store } from "../store";


export default {
    data() {
        return {
            store,
            is404: false,
            user: [],
            doctor: [],
        };
    },

    methods: {
        getUsers() {
            axios
                .get(this.store.baseUrl + 'api/users/' + this.$route.params.slug)
                .then((response) => {
                    this.user = response.data.results;
                    console.log(this.user);
                });

        },
        getDoctors() {
            axios
                .get(this.store.baseUrl + 'api/doctors/' + this.$route.params.slug)
                .then((response) => {
                    this.doctor = response.data.results;
                    console.log(this.doctor);
                });

        },
    },

    created() {
        this.getUsers();
        this.getDoctors();
    },



}

</script>

<template>
    <div class="container">
        <div class="row justify-content-center mt-4">
            <div class="col-md-6">
                <div class="text-center">
                    <img :src="this.store.baseUrl + 'storage/' + doctor.image" :alt="doctor.slug"
                        class="img-fluid rounded-circle">
                </div>
                <h1 class="text-center mt-3 fw-bold">{{ user.name }} {{ user.lastname }}</h1>
                <p class=""><span class="fw-bold">email: </span>{{ user.email }}</p>
                <p class=""><span class="fw-bold">address: </span>{{ user.address }}</p>
                <p class=""><span class="fw-bold">telephone: </span>{{ doctor.telephone }}</p>

                <h2 class="text-center mt-4">Specializations:</h2>
                <ul class="list-group">
                    <li v-for="specialization in user.specializations" :key="specialization.name" class="list-group-item">
                        {{ specialization.name }}
                    </li>
                </ul>

                <h2 class="text-center mt-4">Promotions:</h2>
                <ul class="list-group">
                    <li v-for="promotion in doctor.promotions" :key="promotion.name" class="list-group-item">
                        {{ promotion.name }}
                    </li>
                </ul>

                <h2 class="text-center mt-4">Messages:</h2>
                <ul class="list-group">
                    <li v-for="message in doctor.messages" :key="message.id" class="list-group-item">
                        <p>Email: {{ message.email }}</p>
                        <p>{{ message.text }}</p>
                    </li>
                </ul>

                <h2 class="text-center mt-4">Reviews:</h2>
                <ul class="list-group">
                    <li v-for="review in doctor.reviews" :key="review.id" class="list-group-item">
                        <p>Name: {{ review.name }}</p>
                        <p>Valuation: {{ review.valutation }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@import "../node_modules/bootstrap/scss/bootstrap";

.list {
    list-style: none;
}


/* Stile per le intestazioni delle sezioni */
.container {
    background-color: #74d8f1cb;
    color: #000000;
    padding: 10px;
    border-radius: 5px;
}
</style>