<script>
import { store } from '../store';

export default {
    props: ['objUser'],

    data() {
        return {
            store,
        }
    },

    methods: {
        getImageUrl(image) {
            return image
                ? this.store.baseUrl + 'storage/' + image : this.store.baseUrl + 'storage/default.jpg'
        }
    },
}

</script>

<template>
    <div class="container d-flex justify-content-center ">
        <div class="card effect p-3 ">
            <div class="card__avatar px-3 pb-3 pt-2">
                <img class="img-fluid " :src="getImageUrl(objUser.doctor.image)" alt="">
            </div>
            <div class="mb-2">
                <span class="card__title lastname"> {{ 'Dott. ' + objUser.lastname }} </span>
                <span class="card__title name fw-lighter"> {{ ' ' + objUser.name }} </span>
            </div>
            <div class="specialization_list">
                <button v-for="specialization in objUser.specializations" :key="specialization.id" type="button"
                    class="btn_specialization effect">{{ specialization.name }}</button>
            </div>
            <div class="card__wrapper border-top border-dark">

                <router-link :to="{ name: 'doctor.show', params: { slug: objUser.slug } }"
                    class="card__btn card_2 fw-semibold effect">
                    Mostra di più
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 25rem;
    width: 18rem;
    // border-radius: 20px;
    background: $bg-color;
}

.effect {
    border-radius: 30px;
    background: linear-gradient(145deg, #ffffff, #ffffff);
    box-shadow: 33px 33px 66px #ffffff,
        -33px -33px 66px #d0d0d0;


    .card__title {
        margin-top: 1rem;
        font-weight: 500;
        font-size: 18px;
    }

    .card__subtitle {
        margin-top: 10px;
        font-weight: 400;
        font-size: 15px;
    }

    .card__wrapper {

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 1rem;

        .card__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 6rem;
            height: 2rem;
            margin: 0 .5rem;
            border: 2px solid $main-color;
            text-decoration: none;
            border-radius: .6rem;
            font-size: .6rem;
            color: $main-color;
            background: $bg-color;
            text-transform: uppercase;
            transition: all .5s ease;

            &:hover {
                background: $main-color;
                color: $bg-color;
            }
        }

        .card_2 {
            background: $main-color;
            color: $bg-color;

            &:hover {
                background: $bg-color;
                color: $main-color;
            }
        }
    }
}

.card__avatar {
    display: flex;
    justify-content: center;
    align-items: center;

    .img-fluid {
        border-radius: 100%;
        width: 120px;
        height: 120px;
        object-fit: cover;
        object-position: center;
    }
}
</style>