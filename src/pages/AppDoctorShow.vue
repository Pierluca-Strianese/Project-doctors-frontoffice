
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

            // invio Message
            email: '',
            text: '',
            doctor_id: "",
            showSuccess: false,
            isSending: false,
            hasError: false,
            isLoading: false,

            //Invio Voto
            name: '',
            valutation: '',
            review: '',
            SuccessReview: false,
        

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
        	getImageUrl(image) {
			return image
				? this.store.baseUrl + 'storage/' + image
				: this.store.baseUrl + 'storage/default.jpg';
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
                                    this.showSuccess = true;
                                    this.resetForm(); // Ripulisci il form anche in caso di errore
                                }
                            })
                            .catch(() => {
                                this.isSending = false;
                                this.hasError = true;
                                this.errorMessage = "Si è verificato un errore durante l'invio del messaggio.";
                                this.resetForm(); // Ripulisci il form in caso di errore
                                this.showSuccess = true;
                            });
                    })
                    .catch(() => {
                        // Gestisci eventuali errori durante il recupero del doctorId
                        this.isSending = false;
                        this.hasError = true;
                        this.errorMessage = "Si è verificato un errore durante il recupero delle informazioni del dottore.";
                        this.resetForm(); // Ripulisci il form in caso di errore
                        this.showSuccess = true;
                    });
            } else {
                console.error("Nessun dottore selezionato");
                this.isSending = false;
                this.hasError = true;
                this.resetForm(); // Ripulisci il form in caso di errore
                this.showSuccess = true;
            }
        },
        resetForm() {
            this.email = "";
            this.text = "";
        },

        submitReview() {
            const formData = {
                name: this.name,
                valutation: this.valutation,
                review: this.review,
            };

            // Esegui la richiesta POST con lo slug del dottore nell'URL
            axios
                .post(this.store.baseUrl + `api/reviews/${this.$route.params.slug}`, formData)
                .then((response) => {
                this.successMessage = response.data.message;
                this.errorMessage = null;
                console.log(response.data);

                // Mostra il messaggio di successo
                this.SuccessReview = true;

                // Resetta il form
                this.resetForm();
            
                })
                .catch((error) => {
                // Se la richiesta ha causato un errore
                if (error.response && error.response.data) {
                    this.errorMessage = error.response.data.error;
                } else {
                    this.errorMessage = 'Si è verificato un errore durante l\'invio della recensione.';
                }
                console.error(error);
            });
        },
        resetForm() {
        // Azzerare i valori dei campi del form
        this.name = '';
        this.valutation = null; // Imposta il valore iniziale appropriato
        this.review = '';
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
                        <img :src="getImageUrl(doctor.image)" :alt="doctor.slug" class="img_doc">
                    </div>
                </div>
                <div class="col-md-6 px-4">
                    <h1 class="text-center mt-3 mb-5 fw-light">{{ user.name }} <span class="fw-bold">{{ user.lastname
                    }}</span></h1>
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

                    <div class="valutations mb-4">
                        <h5 class="fw-semibold">Valutazione: </h5>
                        <span class="stars">
                            <template v-for="i in doctor.averageRating">
                                ★
                            </template>
                        </span>
                    </div>
                    <h5 class="fw-semibold">Recensioni: </h5>
                    <div class="reviews_container">
                        <div v-for="review in doctor.reviews" :key="review.id" class="review border-bottom p-2 m-1">
                            <div class="name_review fw-lighter p-1"> <span class="fw-normal">{{ review.name }}</span> |
                                <span class="stars">
                                    <template v-for="i in review.valutation">
                                        ★
                                    </template>
                                </span>
                                <div class="date_review ps-2">Recensito il: {{ review.created_at }}</div>
                            </div>
                            <div class="text_review p-3">{{ review.review }}</div>
                        </div>
                    </div>

                    <div v-if="SuccessReview" class=" mt-2 alert alert-success alert-dismissible fade show mb-4" role="alert">
                        Review sent successfully!
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="SuccessReview = false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="submitReview" class="mb-3">
                        <!-- Campi del form -->
                        <div class="d-flex align-items-center my-4">
                            <div class="pe-4">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" class="form-control form-control-sm" v-model="name" id="name" name="name" placeholder="Inserisci il tuo nome">
                            </div>
                            <div>
                                <label for="valutation" class="form-label">Voto</label>
                                <select class="form-select form-select-sm" v-model="valutation" id="valutation" name="valutation">
                                    <option selected disabled>Inserisci il tuo voto</option>
                                    <option value="1">1 - Pessimo</option>
                                    <option value="2">2 - Scarso</option>
                                    <option value="3">3 - Buono</option>
                                    <option value="4">4 - Ottimo</option>
                                    <option value="5">5 - Eccellente</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="review" class="form-label">Inserisci la tua recensione</label>
                            <textarea class="form-control form-control-sm" v-model="review" id="review" name="review" rows="3" placeholder="Recensione (non obbligatoria)"></textarea>
                        </div>
                        <div class="d-flex flex-row-reverse">
                            <button type="submit" class="btn btn-outline-dark">Invia</button>
                        </div>
                    </form>
                </div>


                <!-- ************************** Contatto ****************************** -->

                

                    <h3 class="text-3xl my-3.5 text-center pt-5 border-top">Contatta il medico</h3>

                <div class="col-md-9 pt-5">
                    <div v-if="showSuccess" class="alert alert-success alert-dismissible fade show mb-4" role="alert">
                        Message sent successfully!
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="showSuccess = false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>


                    <section>
                        <div class="w-100 d-flex justify-content-center">
                            <div class="loader" v-if="isSending"></div>
                        </div>
                       

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
                                    <button type="submit" class="button mt-3 text-white font-monospace" data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Invia
                                    </button>
                                </div>
                            </form>
                          

                            
                        </div>
                    </section>
                </div>

                <!-- ************************** Contatto ****************************** -->

            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.margin {
    margin: 9rem 0rem;
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

.reviews_container {
    max-height: 300px;
    overflow: scroll;

    .name_review {
        font-size: .8rem;
    }
}




.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
