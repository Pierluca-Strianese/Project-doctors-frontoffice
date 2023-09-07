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
  <div class="container-fluid">

    <div class="container-fluid text-center">
      <div class="row align-items-center">
        <div class="col-1"></div>
        <div class="col-5 d-flex flex-column justify-content-evenly first-col">
          <div>
            <h1 class="border-bottom border-dark">Benvenuto in B-Doctor</h1>
          </div>

          <div class="">
            <!-- <h3 class="mb-4">Cerca il tuo dottore</h3> -->
            <h6 class="mb-4 "> Cerca qui il Dottore che fa per te tra 200.000 Specialisti e
              Medici di Medicina Generale
            </h6>

            <button class="text-center show-doc">
              <router-link :to="{ name: 'user.index' }" class="nav-link active">
                <span class="">Mostra tutti i Dottori</span>

              </router-link>
            </button>
          </div>
        </div>
        <div class="col-5 jumbotron">
        </div>
        <div class="col-1"></div>


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

.container-fluid {
  background-color: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 189, 205, 1) 100%);
}


.first-col {
  height: 70vh;
}

.jumbotron {
  background-image: url(../assets/img/doc3jumbonobg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}

.container {
  height: 100%;
}

.row {
  height: 100%;
}

.show-doc {
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
  color: #606060;
  text-shadow: 0 1px #fff;
}

button:hover {
  box-shadow: 0 1px 1px 1px #FCFCFC, 0 1px 1px #00bdcd, 0 -1px 1px #CECFD1, 0 -1px 1px #00bdcd, inset 0 0 1px 1px #CECFD1;
}

button:active {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}

// button:focus {
//   box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
// }

.functions {
  background-color: #E5E5E5;

  .info-title {
    font-weight: bolder;
    color: $secondary-variant-color;
  }
}
</style>