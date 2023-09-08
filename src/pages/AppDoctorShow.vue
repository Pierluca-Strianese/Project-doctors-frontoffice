AppDoctorShow

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
            email: '',
            text: '',
            doctor_id: "",
            showSuccess: false,
            isSending: false,
            hasError: false,
            isLoading: false,

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
            this.isLoading = true;
            this.isSending = true;

            // Rimuovi la parte relativa all'ID del dottore e utilizza il parametro dello slug dalla URL
            const doctorSlug = this.$route.params.slug;

            // Verifica se l'utente ha selezionato un dottore
            if (doctorSlug) {
                const doctorIdPromise = axios.get(this.store.baseUrl + `api/doctors/${doctorSlug}`)
                    .then((response) => {
                        const doctor = response.data.results;

                        // Verifica se il dottore è stato trovato
                        if (doctor) {
                            return doctor.id;
                        } else {
                            // Gestisci il caso in cui il dottore non è stato trovato
                            console.error("Dottore non trovato");
                            throw new Error("Dottore non trovato");
                        }
                    });

                doctorIdPromise
                    .then((doctorId) => {
                        // Ora puoi utilizzare doctorId come doctor_id nella tua richiesta POST
                        axios
                            .post(this.store.baseUrl + 'api/messages/' + doctorSlug, {
                                email: this.email,
                                text: this.text,
                                doctor_id: doctorId,
                            })
                            .then((response) => {
                                this.isSending = false;

                                if (response.data.success) {
                                    this.showSuccess = true;
                                    this.resetForm(); // Ripulisci il form in caso di successo
                                } else {
                                    this.hasError = true;
                                    this.resetForm(); // Ripulisci il form anche in caso di errore
                                }
                            })
                            .catch((error) => {
                                console.error("Errore durante la richiesta Axios:", error.response.data);
                                this.isSending = false;
                                this.hasError = true;
                                this.errorMessage = "Si è verificato un errore durante l'invio del messaggio.";
                                this.resetForm(); // Ripulisci il form in caso di errore
                            });
                    })
                    .catch((error) => {
                        // Gestisci eventuali errori durante il recupero del doctorId
                        console.error("Errore durante la richiesta Axios:", error.message);
                        this.isSending = false;
                        this.hasError = true;
                        this.errorMessage = "Si è verificato un errore durante il recupero delle informazioni del dottore.";
                        this.resetForm(); // Ripulisci il form in caso di errore
                    });
            } else {
                console.error("Nessun dottore selezionato");
                this.isSending = false;
                this.hasError = true;
                this.resetForm(); // Ripulisci il form in caso di errore
            }
        },
        resetForm() {
            this.email = "";
            this.text = "";
        },
    },

    created() {
        this.getUsers();
        this.getDoctors();
    },



}

</script>

<template>
    <form class="margin" @submit.prevent="sendLead" novalidate>
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
                        <h5>Valutazione: {{ doctor.averageRating }} </h5>
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


                <!-- ************************** Contatto ****************************** -->

                <div>
                    <h1 class="text-3xl my-3.5 text-center mt-5">Contact Us</h1>

                    <section>
                        <div class="border-solid border-2 border-dark-600 my-6 m-auto block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                            v-if="!isSending">
                            <form @submit.prevent="sendLead" v-if="!isSending">
                                <div class="mb-6">
                                    <label for="email" class="block font-bold text-gray-800 mb-2">Email</label>
                                    <input type="email" class="form-control mb-4" id="email"
                                        placeholder="Inserici tuo indirizzo mail" v-model="email" required />
                                </div>

                                <div class="mb-6">
                                    <label for="text" class="block font-bold text-gray-800 mb-2">Message</label>
                                    <textarea class="form-control" id="text" rows="3"
                                        placeholder="Scrivi qui il tuo messaggio" v-model="text" required></textarea>
                                </div>

                                <!-- Aggiunto campo nascosto per doctor_id -->
                                <input type="hidden" v-model="doctor_id" name="doctor_id" />

                                <div class="d-flex flex-row-reverse">
                                    <button type="submit" class="button mt-2 text-white font-monospace" data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Invia
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>

                <!-- ************************** Contatto ****************************** -->


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

.margin {
    margin-top: 6rem;
    margin-bottom: 12rem;
}

.list {
    list-style: none;
}

.img_container {

    position: relative;

    .bronze {
        position: absolute;
        top: 10px;
        left: 20px;
        height: 17%;
    }

    .img_doc {
        width: 400px;
        height: 100%;
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

.button {
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    width: 8rem;
    height: 2.7rem;
    background-color: #00bdcd;
    border-radius: 30px;
    border: 1px solid #8F9092;
    transition: all 0.1s ease;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-shadow: 0 1px #fff;
    text-transform: uppercase;
}

.button:hover {
    box-shadow: 0 1px 1px 1px #009aa8, 0 1px 1px #009aa8, 0 -1px 1px #009aa8, 0 -1px 1px #009aa8, inset 0 0 1px 1px #009aa8;
}
</style>
