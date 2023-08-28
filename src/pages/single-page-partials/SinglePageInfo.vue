<script>

export default {
    name: 'SinglePageInfo',
    data() {
        return {
            fullStars: [],
            emptyStars: [],
            averageVote: null,
        }
    },
    props: {
        'doctor': {
            type: Object,
            required: true,
        },
        'review': {
            type: Object,
            required: true,
        },
        reviewsCount: Number,
    },
    methods: {
        averageByKey(array, key) {
            if (!array || array.length === 0 || !key) {
                return 0;
            }
            const sum = array.reduce((acc, obj) => {
                return acc + obj[key];
            }, 0);
            this.averageVote = Math.floor(sum / array.length);
            //console.log(this.averageVote)
            return this.averageVote
        },

        getStarsVote(num) {
            let fullStarElement = num / num
            //console.log(fullStarElement)

            for (let i = 0; i < num; i++) {
                this.fullStars.push(fullStarElement);
            }
            //console.log(`Lunghezza stelle piene${this.fullStars.length}`)

            let emptyStarElement = 1
            for (let i = 0; i < (5 - num); i++) {
                this.emptyStars.push(emptyStarElement)
            }
            //console.log(`Lunghezza stelle vuote${this.emptyStars.length}`)
        },
    },
    created() {
        this.averageByKey(this.review, "vote")
        this.getStarsVote(this.averageVote);
    }
}
</script>

<template>
    <section class="container p-5">
        <div class="row justify-content-around">

            <div class="doctor-image-container d-flex justify-content-center col-10 col-lg-6 shadow-lg">
                <img class="doctor-photo img-fluid" :src="`http://127.0.0.1:8000/storage/${doctor.photo}`"
                    :alt="doctor.user.name">
            </div>

            <div class="col-12 col-lg-6 p-3">
                <div class="mb-5">

                    <h1 class="d-flex justify-content-center justify-content-lg-start">
                        {{ doctor.user.name }} {{ doctor.user.surname }}
                    </h1>

                    <h5 class=" secondary-text-color">
                        Specializzazione
                    </h5>
                    <span class="" v-for="(specialization, index) in doctor.specializations" :key="index">
                        {{ specialization.title }} |
                    </span>

                    <h6 class=" secondary-text-color mt-3">
                        Prestazione
                    </h6>
                    <span>
                        {{ doctor.performance }}
                    </span>

                    <div class="vote-stars mt-4">
                        <h6 class="secondary-text-color">Voto </h6>
                        <i v-for="starEL in fullStars" class="fa-solid fa-star"></i>
                        <i v-for="star in emptyStars" class="fa-regular fa-star"></i>
                        <span class="ms-2">{{ reviewsCount }} recensioni</span>
                    </div>

                </div>

                <div class="d-flex justify-content-around gap-2 text-center">
                    <a class="my-btn" href="#messagges">Invia un messaggio</a>
                    <a class="my-btn" href="#reviews">Scrivi una recensione</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;


h1 {
    color: $primary-color;
}

.doctor-image-container {
    max-height: 300px;
    max-width: 400px;
    //height: 300px;
    margin-bottom: 0 !important;
    border-radius: 25px;
    overflow: hidden;
    padding: 0 !important;
}

.image-box {
    width: 300px;
    min-width: 300px;
    // border: 1px solid black;
}

.doctor-photo {
    object-fit: cover;
    width: 100%;
}

.fa-star {
    color: rgba(255, 208, 0, 0.815);
}
</style>
