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
</style>