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
                <!-- FOTO DOC -->
                <img class="img-fluid" :src="getImageUrl(objUser.doctor.image)" alt="">
            </div>

            <!-- NOME DOC -->
            <div class="mb-2">

                <span class="card__title lastname fw-semibold"> {{ 'Dott. ' + objUser.lastname }} </span>
                <span class="card__title name fw-light"> {{ ' ' + objUser.name }} </span>
            </div>

            <!-- SPECIALIZZAZIONI DOC -->
            <div class="specialization_list">

                <button v-for="specialization in objUser.specializations" :key="specialization.id" type="button"
                    class="btn_specialization show-spec" id="truncateLongTexts">{{ specialization.name
                    }}</button>
            </div>


            <!-- BARRA SPAZIO -->
            <div class="card__wrapper border-top border-dark">


                <!-- BOTTONE MOSTRA + -->
                <router-link :to="{ name: 'doctor.show', params: { slug: objUser.slug } }"
                    class="card__btn card_2 fw-semibold effect mt-4">
                    Mostra di più
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

#truncateLongTexts {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* This is where the magic happens. */
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 28rem;
    width: 22rem;
    background: $bg-color;
    // cursor: pointer;

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
            width: 8rem;
            height: 2.5rem;
            border: 2px solid $main-color;
            text-decoration: none;
            border-radius: 1rem;
            font-size: .7rem;
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
        width: 160px;
        height: 160px;
        object-fit: cover;
        object-position: center;
    }
}





.show-spec {
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    width: 150px;
    height: 50px;
    background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
    border-radius: 30px;
    border: 1px solid #8F9092;
    transition: all 0.1s ease;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-shadow: 0 1px #fff;
}

.show-spec:hover {
    box-shadow: 0 1px 1px 1px #FCFCFC, 0 1px 1px #00bdcd, 0 -1px 1px #CECFD1, 0 -1px 1px #00bdcd, inset 0 0 1px 1px #CECFD1;
}

.show-spec:active {
    box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}
</style>
