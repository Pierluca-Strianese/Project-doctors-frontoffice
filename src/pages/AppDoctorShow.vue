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

        sendLead() {
            axios.post(this.store.baseUrl + '/api/leads')
        }


    },

    created() {
        this.getUsers();
        this.getDoctors();
    },



}

</script>

<template>
    <form @submit.prevent="sendLead" novalidate>
        <div class="container mt-5">
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <div class="img_container">
                        <img src="../assets/img/Bronze.png" class="bronze">
                        <img :src="this.store.baseUrl + 'storage/' + doctor.image" :alt="doctor.slug" class="img_doc">
                    </div>
                </div>
                <div class="col-md-6 px-4">
                    <h1 class="text-center mt-3 mb-5 fw-bold">{{ user.name }} {{ user.lastname }}</h1>
                    <div class="mb-2">
                        <font-awesome-icon :icon="['fas', 'envelope-circle-check']" class="me-2" />
                        <span class="fw-bold"> Email: </span> {{ user.email }}
                    </div>
                    <div class="mb-2">
                        <font-awesome-icon :icon="['fas', 'map-location-dot']" class="me-2" />
                        <span class="fw-bold"> Indirizzo: </span>{{ user.address }}
                    </div>
                    <div class="mb-2">
                        <font-awesome-icon :icon="['fas', 'phone']" class="me-2" />
                        <span class="fw-bold"> Telefono: </span>{{ doctor.telephone }}
                    </div>
                    <div class="specialization_list">
                        <button v-for="specialization in user.specializations" :key="specialization.name" type="button"
                            class="btn_specialization shadow-sm">{{ specialization.name }}</button>
                    </div>

                    <div class="valutations">
                        <h5>Valutazione: </h5>
                    </div>
                </div>
                <!-- <h2 class="text-center mt-4">Specializations:</h2>
                <ul class="list-group">
                    <li v-for="specialization in user.specializations" :key="specialization.name" class="list-group-item">
                        {{ specialization.name }}
                    </li>
                </ul> -->

                <!-- <h2 class="text-center mt-4">Promotions:</h2>
                <ul class="list-group">
                    <li v-for="promotion in doctor.promotions" :key="promotion.name" class="list-group-item">
                        {{ promotion.name }}
                    </li>
                </ul> -->
                <div class="send_message my-5">
                    <h2 class="text-center">Invia messaggio:</h2>
                    <div class="py-3">
                        <label for="exampleFormControlInput1" class="form-label">Inidirizzo Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Inserisci il tuo indirizzo email">
                    </div>
                    <div class="py-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Inserisci il tuo messaggio</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Il tuo messaggio"></textarea>
                    </div>
                    <button type="button" class="btn btn-outline-success">Invia</button>
                </div>

                <!-- <ul class="list-group">
                        <li v-for="message in doctor.messages" :key="message.id" class="list-group-item">
                            <p>Email: {{ message.email }}</p>
                            <p>{{ message.text }}</p>
                        </li>
                    </ul> -->

                <!-- <h2 class="text-center mt-4">Reviews:</h2>
                <ul class="list-group">
                    <li v-for="review in doctor.reviews" :key="review.id" class="list-group-item">
                        <p>Name: {{ review.name }}</p>
                        <p>Valuation: {{ review.valutation }}</p>
                    </li>
                </ul> -->

            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.list {
    list-style: none;
}

.img_container {

    position: relative;

    .bronze {
        position: absolute;
        top: 15px;
        left: 25px;
        height: 20%;
    }

    .img_doc {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 25px;
        box-shadow: 7px 10px 20px 8px rgba(0, 0, 0, 0.3);
    }
}

.specialization_list {
    .btn_specialization {
        width: fit-content;
        height: fit-content;
        margin: .4rem;
        padding: .2rem .7rem;
        font-size: 1rem;
    }
}

.send_message {
    padding: 1rem;
    background-color: $bg-color-2;
    border-radius: 25px;
}
</style>