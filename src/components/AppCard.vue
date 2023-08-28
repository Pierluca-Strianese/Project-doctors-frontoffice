<script>

export default {
    props: ['objDoctor'],

    data() {
        return {
        }
    }
}

</script>

<template>
    <div class="container d-flex justify-content-center ">
        <div class="card p-3 shadow">
            <div class="card__avatar px-3 pb-3 pt-2">
                <img class="img-fluid shadow" :src=objDoctor.image alt="">
            </div>
            <div>
                <span class="card__title fw-lighter"> {{ objDoctor.name }} </span>
                <span class="card__title"> {{ ' ' + objDoctor.lastname }} </span>
            </div>
            <div>
                <button v-for="specialization in specializations" :key="specialization.id" type="button"
                    class="btn_specialization m-1 shadow-sm">{{ specialization.name }}</button>
            </div>
            <div class="card__wrapper">
                <router-link :to="{ name: 'doctor.show', params: { id: objDoctor.id } }"
                    class="card__btn mx-1 fw-semibold p-2">
                    Info </router-link>
                <button class="card__btn card__btn-solid mx-1 fw-semibold">Contatta</button>
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
    border-radius: 20px;
    background: $bg-color;

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
        .card__btn {
            margin-top: 1rem;
            width: 5rem;
            height: 2rem;
            border: 2px solid $main-color;
            border-radius: .6rem;
            font-size: .6rem;
            color: $main-color;
            background: $bg-color;
            text-transform: uppercase;
            transition: all 1s ease;

            &:hover {
                box-shadow: 5vw 0 0 $main-color inset;
                background: $main-color;
                color: $bg-color;
            }
        }

        .card__btn-solid {
            background: $main-color;
            color: $bg-color;

            &:hover {
                box-shadow: 5vw 0 0 $bg-color inset;
                color: $main-color;
            }
        }
    }

    .btn_specialization {
        background-color: $bg-color;
        border-radius: 30rem;
        border: 1px outset #dadada;
        color: #969595;
        font-size: .9rem;
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