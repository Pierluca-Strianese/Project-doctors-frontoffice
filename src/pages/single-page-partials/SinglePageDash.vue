<script>
import SendReview from '../../components/SendReview.vue';

export default {
  name: 'SinglePageDash',
  components: {
    SendReview

  },

  data() {
    return {
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
    'userId': {
      type: Number,
      required: true
    }

  },
  methods: {

  },
  created() {
  },


}
</script>

<template>
  <!-- Doctor's info -->
  <section id="doctor-infos" class="my-card shadow-lg mb-4">
    <div class="info-title d-flex justify-content-center">
      <h5 class="m-0">Informazioni</h5>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-between p-4">

        <div class="col-12 col-md-5">
          <div class="d-flex justify-content-between mb-3">
            <div>
              <h5 class="secondary-text-color">Indirizzo</h5>
              <p>{{ doctor.address }}</p>
            </div>

            <div>
              <h5 class="secondary-text-color">Telefono</h5>
              <p>{{ doctor.phone }}</p>
            </div>
          </div>

          <div class="">
            <h5 class="text-center mb-3 secondary-text-color">Biografia</h5>
            <p>{{ doctor.bio }}</p>
          </div>
        </div>

        <div class="col-12 col-md-5 d-flex flex-column align-items-center">
          <h5 class="text-center secondary-text-color">Curriculum</h5>

          <div class="curriculum-image-container shadow-lg mb-3">
            <img class="image-cv img-fluid" src="/imgs/Curriculum_2.png" :alt="doctor.user.name">
          </div>

          <a href="/imgs/Curriculum_1.png" download class="my-btn mt-3 mb-3"><i class="fa-solid fa-download"></i>
            Scarica
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Reviews -->
  <section id="reviews" class="my-card shadow-lg mb-4">
    <div class="info-title d-flex justify-content-center">
      <h5 class="m-0">Recensioni</h5>
    </div>

    <div class="p-4">
      <div class="container-fluid">
        <h5 class="secondary-text-color mb-3">Recensioni dei clienti</h5>

        <ul class="mb-5">
          <li v-for="(reviewEl, index) in review" :key="index">
            <h5>Voto:
              <i class="fa-solid fa-star" v-for="n in Math.ceil(reviewEl.vote)"></i>
              <i class="fa-regular fa-star" v-for="n in Math.floor(5 - reviewEl.vote)"></i>
            </h5>
            <h6>{{ reviewEl.name }} {{ reviewEl.surname }}</h6>
            <p>{{ reviewEl.text }}</p>
          </li>
        </ul>
      </div>

      <div class="container-fluid">
        <h5 class="secondary-text-color mb-3">Scrivi una recensione</h5>
        <SendReview :userId="userId" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;

.my-card {
  border-radius: 25px !important;
  border-width: 0 !important;
  background-color: $background-color !important;
  padding: 0;
  backdrop-filter: blur(50px);
  overflow: hidden;
}

.info-title {
  padding: 1rem;
  background-color: $primary-color;
  color: $secondary-text-color;
}

.curriculum-image-container {
  margin-bottom: 0 !important;
  border-radius: 25px;
  overflow: hidden;
  padding: 0 !important;
}

.fa-star {
  color: rgba(255, 208, 0, 0.815);
}
</style>