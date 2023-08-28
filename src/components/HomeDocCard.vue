<script>

export default {
    name: 'HomeDocCard',
    data() {
        return {
            doctors: [],
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

            for (let i = 0; i < num; i++) {
                this.fullStars.push(fullStarElement);
            }

            let emptyStarElement = 1
            for (let i = 0; i < (5 - num); i++) {
                this.emptyStars.push(emptyStarElement)
            }
        },
    },
    created() {
        this.averageByKey(this.review, "vote")
        this.getStarsVote(this.averageVote);
    },
}
</script>

<template>
    <article class="card col-12 my-card">
        <router-link :to="{ name: 'doctor', params: { id: doctor.id } }">

            <!-- Doctor's photo -->
            <div class="doctor-image-container d-flex justify-content-center mb-4">
                <img :src="`http://127.0.0.1:8000/storage/${doctor.photo}`" :alt="doctor.user.name"
                    class="doctor-photo img-fluid">
            </div>

            <div class="spec-info py-2 text-center">
                <p class="m-0">{{ doctor.specializations.map(s => s.title).join(' - ') }}</p>
            </div>

            <!-- Doctor's infos -->
            <div class="doctor-info-container">
                <h5>
                    {{ doctor.user.name }} {{ doctor.user.surname }}
                </h5>

                <!-- Reviews -->
                <div class="reviews">
                    <div class="vote-stars">
                        <i v-for="starEL in fullStars" class="fa-solid fa-star"></i>
                        <i v-for="star in emptyStars" class="fa-regular fa-star"></i>
                        <span class="ms-2">{{ doctor.user.reviews.length }} recensioni</span>
                    </div>
                </div>

                <p class="text-center mt-4 mb-0">
                    {{ doctor.performance }}
                </p>

            </div>
        </router-link>
    </article>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.fa-star {
    color: rgba(255, 208, 0, 0.815);
}

a {
    color: $primary-variant-color;
    text-decoration: none;
}

.my-card {
    border-radius: 25px;
    border-width: 0 !important;
    background-color: $background-color !important;
    padding: 0;
    backdrop-filter: blur(50px);
    overflow: hidden;

    .doctor-image-container {
        max-height: 300px;
        margin-bottom: 0 !important;

        .doctor-photo {
            object-fit: cover;
            width: 100%;
        }
    }

    .spec-info {
        width: 100%;
        color: $secondary-text-color;
        background-color: $primary-color;
    }

    .doctor-info-container {
        padding: 1rem 2rem 2rem;

        h5 {
            font-weight: bold;
        }
    }
}
</style>

