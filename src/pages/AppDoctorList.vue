<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppDoctorList',
    data() {
        return {
            store,
            imgUrl: "",
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getSponsoredDoc(gotoPage) {
            let url = `${this.store.baseUrl}/doctors?specializations=${this.store.inputSpecialization}&min_stars=${this.store.stars}&min_reviews=${this.store.reviews}&only_sponsored=1`;
            axios.get(url,
                {
                    params: {
                        page: gotoPage
                    }
                }
            )
                .then(response => {
                    this.store.sponsoredDoctors = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                }
                )
        },
        getDoctors(gotoPage) {
            let url = `${this.store.baseUrl}/doctors?specializations=${this.store.inputSpecialization}&min_stars=${this.store.stars}&min_reviews=${this.store.reviews}`;
            axios.get(url,
                {
                    params: {
                        page: gotoPage
                    }
                }
            )
                .then(response => {
                    this.store.doctors = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;

                })
        },
        getInputSpec(specialization) {
            this.store.inputSpecialization = specialization;

        },
        getListDoc(gotoPage) {
            this.getSponsoredDoc(gotoPage);
            this.getDoctors(gotoPage);
        },
    },
    mounted() {
        this.getListDoc(this.currentPage);
    }
}





</script>

<template>
    <div id="main-container" class="container">
        <div class="d-flex flex-column gap-3 border p-4 rounded mb-4 bg-body-light">
            <div class="input-group input-group-lg bg-body-light" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" placeholder="es. Cardiologo"
                    v-model="this.store.inputSpecialization">
                <div class="dropdown w-100">
                    <ul class="dropdown-menu w-100">
                        <li v-for="( specialization, i ) in  this.store.specializations "><a class="dropdown-item" href="#"
                                @click="this.getInputSpec(specialization.name)">{{
                                    specialization.name }}</a></li>
                    </ul>
                </div>
            </div>
            <div class="my_filter d-flex w-100 justify-content-between">
                <div class="my_vote2 btn-group col-5 d-flex flex-column" role="group"
                    aria-label="Basic radio toggle button group">
                    <h4>Filtra per recensioni</h4>
                    <div class="d-flex">
                        <div v-for="(vote, i) in 5">
                            <input v-model="store.reviews" type="radio" class="btn-check" name="btnradio"
                                :id="`btnradio${i + 1}`" autocomplete="off" :value="`${i + 1}`" checked>
                            <label class="btn btn-outline-dark" :for="`btnradio${i + 1}`">{{ i + 1 }}</label>
                        </div>
                        <input v-model="store.reviews" type="radio" class="btn-check" name="btnradio" id="btnradio"
                            autocomplete="off" value="0" checked>
                        <label class="btn btn-outline-dark" for="btnradio">All</label>
                    </div>
                </div>
                <div class=" btn-group col-lg-4 col-xl-6 d-flex flex-column my_vote" role="group"
                    aria-label="Basic radio toggle button group">
                    <h4>Filtra per media voto</h4>
                    <div id="stars_container" class="d-flex">
                        <div class="my_stars" v-for="(star, i) in  5 ">
                            <input v-model="store.stars" type="radio" class="btn-check" name="btnstar"
                                :id="`btnstar${i + 1}`" autocomplete="off" :value="`${i + 1}`" checked>
                            <label class=" btn btn-outline-dark" :for="`btnstar${i + 1}`"><i
                                    class="fa-solid fa-star text-warning" v-for=" littlestar  in  (i + 1) "></i></label>
                        </div>
                        <div class="my_numbers" v-for="(star, i) in  5 ">
                            <input v-model="store.stars" type="radio" class="btn-check" name="btnstar"
                                :id="`btnstar${i + 1}`" autocomplete="off" :value="`${i + 1}`" checked>
                            <label class=" btn btn-outline-dark" :for="`btnstar${i + 1}`">{{ i + 1 }}</label>
                        </div>
                        <input v-model="store.stars" type="radio" class="btn-check" name="btnstar" id="btnstar"
                            autocomplete="off" value="0" checked>
                        <label class="btn btn-outline-dark" for="btnstar">All</label>
                    </div>
                </div>
            </div>
            <router-link @click="this.getListDoc()" :to="{ name: 'doctor_list' }" id="search-btn"
                class="btn btn-lg z-3 btn-success m-3" type="button">Cerca</router-link>
        </div>
        <div id="row-container" v-if="this.store.sponsoredDoctors.length > 0 || this.store.doctors.length > 0">

            <div class="row">
                <!-- <h2 class="py-3 text-success">Dottori in evidenza</h2> -->
                <div v-if="this.store.sponsoredDoctors.length > 0" class="d-flex flex-wrap ms-gap">

                    <div class="ms-col d-flex align-items-stretch " v-for=" doctor  in  this.store.sponsoredDoctors ">
                        <div class="card my_height border border-4 border-success">
                            <span class="ms_badge text-bg-success position-absolute top-0 end-0 p-2">In
                                evidenza <i class="fa-solid fa-star text-warning"></i></span>
                            <img v-if="doctor.photo" :src="`${store.baseUrlnoApi}/storage/${doctor.photo}`"
                                class="card-img-top my_image" :alt="`immagine-profilo-di-${doctor.user.name}`">
                            <img v-else class="card-img-top my_image"
                                src="https://www.diamedica.it/wp-content/uploads/2018/12/dottore-1024x1024.jpg"
                                :alt="`immagine-profilo-di-${doctor.user.name}`">
                            <div class="card-body position-relative">
                                <h3 class="card-title">{{ doctor.user.name }} {{ doctor.user.surname }}</h3>
                                <div class="badge rounded-pill text-bg-success fs-6 me-2 my-2 d-inline-block"
                                    v-for="specialization in doctor.specializations">{{ specialization.name }}</div>
                                <div>
                                    <span class="card-title" v-if="doctor.review_count != 0">N. recensioni: {{
                                        doctor.review_count
                                    }}
                                    </span>
                                    <span class="card-title d-block" v-else>Nessuna recensione</span>
                                </div>
                                <div v-if="doctor.average_stars != 0">
                                    <span class="card-title">Media Voti:</span>
                                    <div class="btn-outline-dark">
                                        <i class="fa-solid fa-star text-warning"
                                            v-for=" littlestar  in  doctor.average_stars"></i>
                                        <i class="fa-regular fa-star text-warning"
                                            v-for=" littlestar  in  (5 - doctor.average_stars)"></i>
                                    </div>
                                </div>
                                <span class="card-title d-block" v-else>Nessuna votazione</span>
                                <p class="card-text mb-5">Indirizzo: {{ doctor.address }}</p>
                                <router-link :to="{ name: 'doctor_page', params: { slug: doctor.slug } }"
                                    class="btn ms-bg-primary position-absolute my_position">Vedi dettaglio
                                    Dottore</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <!-- <h2 class="py-3 text-success">Lista dottori</h2> -->
                <div v-if="this.store.doctors.length > 0" class="d-flex flex-wrap ms-gap">

                    <div class="ms-col d-flex align-items-stretch " v-for=" doctor  in  this.store.doctors ">
                        <div class="card my_height ">
                            <img v-if="doctor.photo" :src="`${store.baseUrlnoApi}/storage/${doctor.photo}`"
                                class="card-img-top my_image" :alt="`immagine-profilo-di-${doctor.user.name}`">
                            <img v-else class="card-img-top my_image"
                                src="https://www.diamedica.it/wp-content/uploads/2018/12/dottore-1024x1024.jpg"
                                :alt="`immagine-profilo-di-${doctor.user.name}`">
                            <div class="card-body position-relative">
                                <h3 class="card-title">{{ doctor.user.name }} {{ doctor.user.surname }}</h3>
                                <div class="badge rounded-pill text-bg-success fs-6 me-2 my-2 d-inline-block"
                                    v-for="specialization in doctor.specializations">{{ specialization.name }}</div>
                                <div>
                                    <span class="card-title" v-if="doctor.review_count != 0">N. recensioni: {{
                                        doctor.review_count
                                    }}
                                    </span>
                                    <span class="card-title d-block" v-else>Nessuna recensione</span>
                                </div>
                                <div v-if="doctor.average_stars != 0">
                                    <span class="card-title">Media Voti:</span>
                                    <div class="btn-outline-dark">
                                        <i class="fa-solid fa-star text-warning"
                                            v-for=" littlestar  in  doctor.average_stars"></i>
                                        <i class="fa-regular fa-star text-warning"
                                            v-for=" littlestar  in  (5 - doctor.average_stars)"></i>
                                    </div>
                                </div>
                                <span class="card-title d-block" v-else>Nessuna votazione</span>
                                <p class="card-text mb-5">Indirizzo: {{ doctor.address }}</p>

                                <router-link :to="{ name: 'doctor_page', params: { slug: doctor.slug } }"
                                    class="btn ms-bg-primary position-absolute my_position">Vedi dettaglio
                                    Dottore</router-link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center p-4 fs-4">
            <span>Nessun risultato</span>
        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center ms-5 mt-5">
                <li class="page-item"><button class="page-link" @click="getListDoc(currentPage - 1)"
                        :class="{ 'disabled': currentPage == 1 }"><span aria-hidden="true">&laquo;</span></button></li>

                <li class="page-item" v-for="page in lastPage" :class="{ 'active': page == currentPage }">
                    <button @click="getListDoc(page)" :class="{ 'page-link': true }">{{ page }}</button>
                </li>

                <li class="page-item"><button class="page-link" @click="getListDoc(currentPage + 1)"
                        :class="{ 'disabled': currentPage == lastPage }"><span aria-hidden="true">&raquo;</span></button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@import '../style/partials/_variables.scss';

.ms-bg-primary {
    background-color: $primary-color;
}

.ms-bg-primary:hover {
    background-color: darkgoldenrod;
}

.ms-gap {
    gap: 12px;
}

.ms-col {
    width: calc((100% / 4) - 12px);
}

.my_position {
    bottom: 10px;
    left: 10px;
}

.my_image {
    height: 310px;
    object-fit: cover;
}

.my_height {
    width: 100%;
}

#main-container {
    background-color: white;
    padding: 40px;
    border-radius: 12px;
}

.my_numbers {
    display: none;
}

.sponsoredCard {
    border: 4px solid $primary-color;
}

.ms_badge {
    border-bottom-left-radius: 12px;
}

.page-item.active .page-link {
    background-color: $primary-color !important;
    border-color: $primary-color !important;
    color: white;
}


@media screen and (max-width: 3000px) {
    .my_vote {
        align-items: flex-end;


    }
}

@media screen and (max-width: 1200px) {
    .ms-col {
        width: calc((100% / 2) - 12px);

        .my_height {
            width: 100%;
        }

        .my_image {
            width: 100%;
            height: 414px;
        }
    }

    .my_numbers {
        display: block;
    }

    .my_stars {
        display: none;
    }
}

@media screen and (max-width: 1200px) {
    .ms-col {
        width: calc((100% / 2) - 12px);

        .my_height {
            width: 100%;
        }

        .my_image {
            width: 100%;
            height: 414px;
        }
    }
}

@media screen and (max-width: 767px) {

    .my_filter {
        flex-direction: column;
    }

    .my_vote2 {
        width: 100%;
        padding-bottom: 40px;
        align-items: center;
        text-align: center;
    }

    .my_vote {
        width: 100%;
        padding-bottom: 40px;
        align-items: center;
        text-align: center;


    }

    .ms-col {
        width: 100%;

        .my_height {
            width: 100%;
        }

        .my_image {
            width: 100%;
            height: 514px;
        }
    }

}
</style>
