<script>
import { store } from '../store.js';
// import UsersList from "../components/UsersList.vue";
import DoctorsList from "../components/DoctorsList.vue"

export default {
  name: 'AppHome',
  data() {
    return {
      store,
      doctor: null,

    }
  },
  components: {
    // UsersList,
    DoctorsList,
  },

};

</script>

<template>
  <div class="jumbotron">

    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col-6">
          <h3>Cerca il tuo dottore</h3>
          <h6> Cerca il dottore che fa per te tra 200.000 Specialisti e Medici di Medicina Generale</h6>
          <button class="text-center" style="background-color: $bg-color; color: black; padding: 10px 20px; border-radius: 5px; border: 2px solid black;">
            <router-link :to="{ name: 'user.index' }" class="nav-link active">
              <span class="">Cerca dottore</span>
            </router-link>
          </button>
        </div>
        <div class="col-3">
        </div>
        <div class="col-3">
        </div>
      </div>
    </div>

  </div>

  <div class="section_two">
    <h2 class="mt-4 text-center"> I nostri migliori medici </h2>
    <!-- <UsersList /> -->
    <DoctorsList />
    
  </div>

  <div class="main-home">
    <section class="functions py-5">
      <div class="container p-3 justify-content-around">
        <div class="row justify-content-center">
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column justify-content-center">
              <i class=""></i> <!--AGGIUNGERE ICONA SE SI VUOLE -->
              <h5 class="mb-4">
                Trova il dottore adatto a te!
              </h5>
            </div>
            <p>
              Scegli il tipo di specializzazione che ti interessa per trovare il medico inerente o
              scopri la vasta scelta di dottori offerti dal nostro sito.
            </p>
          </div>
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column">
              <i class=""></i> <!--AGGIUNGERE ICONA SE SI VUOLE -->
              <h5 class="mb-4">
                Prenota la tua visita!
              </h5>
            </div>
            <p>
              Con il nostro servizio di messaggistica, potrai inviare personalmente un messaggio ad uno dei nostri dottori
              per avere informazioni e prenotare un appuntamento.
            </p>
          </div>
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column">
              <i class=""></i> <!--AGGIUNGERE ICONA SE SI VUOLE -->
              <h5 class="mb-4">
                Lascia la tua recensione!
              </h5>
            </div>
            <p>
              Oltre a poter leggere le recensioni di altri pazienti, avrai la possibilità
              di inserire la tua personale recensione per farci sapere la tua opinione sulla visita effettuate.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/partials/_variables.scss';

.jumbotron {
  background-image: url(../assets/img/doc3jumbo.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 90vh;
}

.container {
  height: 100%;
}

.row {
  height: 100%;
}

.functions {
  background-color: #E5E5E5;

  .info-title {
    font-weight: bolder;
    color: $secondary-variant-color;
  }
}

</style>