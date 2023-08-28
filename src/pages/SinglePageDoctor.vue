<script>
// import { store } from '../store';
import axios from 'axios';

import SinglePageDash from './single-page-partials/SinglePageDash.vue';
import SinglePageInfo from './single-page-partials/SinglePageInfo.vue';
import SinglePageMessage from './single-page-partials/SinglePageMessage.vue';

export default {
  name: 'SinglePageDoctor',
  components: {
    SinglePageDash,
    SinglePageInfo,
    SinglePageMessage,
  },
  data() {
    return {
      doctor: null,
      review: [],
      reviewsCount: null,
      userId: null,
    }
  },
  methods: {
    getDoctor() {
      axios.get(`http://127.0.0.1:8000/api/doctor/${this.$route.params.id}`, {
        params: {

        }
      })
        .then((response) => {
          // console.log(response.data.response);
          this.doctor = (response.data.doctor);
          this.review = response.data.reviews;
          this.reviewsCount = response.data.reviews.length;
          this.userId = response.data.userId;
          //console.log(response.data.reviews.length)
        })
        .catch(function (error) {
          console.warn(error);
        });
    },
  },
  created() {
    this.getDoctor();
  }
}
</script>

<template>
  <div class="wallpaper w-100 h-100 py-5">
  <div class="container card col-12 shadow-lg my-card">
    <SinglePageInfo :doctor="doctor" :review="review" :reviewsCount="reviewsCount" />
    <SinglePageDash :doctor="doctor" :review="review" :userId="userId" />
    <SinglePageMessage :doctor="doctor" :review="review" :userId="userId" />
  </div>
  </div>
</template>

<style lang="scss" >
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.wallpaper {
  background-image: url('/imgs/Bg-image.jpg');
  background-size: cover;
  background-position: center;
}

.my-card {
  border-radius: 25px !important;
  border-width: 0 !important;
  background-color: $background-color !important;
  padding: 0;
  backdrop-filter: blur(50px);
  overflow: hidden;
}

</style>



