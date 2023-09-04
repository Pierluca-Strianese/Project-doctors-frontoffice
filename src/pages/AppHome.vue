<script>
import { store } from '../store.js';
import UsersList from "../components/UsersList.vue"

import axios from 'axios';

export default {
  name: 'AppHome',
  data() {
    return {
      store,
      doctor: null,
    }
  },
  components: {
    UsersList,
  },
  methods: {
    getInputSpec(specialization) {
      this.store.inputSpecialization = specialization;
    },
    getSponsoredDoc() {
      let url = `${this.store.baseUrl}/doctors?specializations=&min_stars=0&min_reviews=0&only_sponsored=1`;
      axios.get(url)
        .then(response => {
          this.store.sponsoredDoctors = response.data.results.data;
        }
        )
    },
  },



  mounted() {
    this.getSponsoredDoc();

  },

};

</script>

<template>
  <div class="jumbotron">

    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col-6">
          <h3>Cerca il tuo dottore</h3>
          <h6>Tra 200.000 Specialisti e Medici di Medicina Generale</h6>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
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
    <UsersList />
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







// @media all and (max-width: 1200px) {
//   .jumbo-img {
//     height: 400px;
//   }
// }

// @media all and (max-width: 992px) {
//   .jumbo-img {
//     display: none;
//   }

//   #jumbotron {
//     padding: 150px 0 70px;
//   }



// @media all and (max-width: 500px) {
//   #titolo-jumbo {
//     font-size: 60px;
//   }
</style>