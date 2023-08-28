<script>
import { store } from '../store';
import axios from 'axios';

import SinglePageDash from './SinglePageDash.vue';
import SinglePageInfo from './SinglePageInfo.vue';
import SinglePageMessage from './SinglePageMessage.vue';

export default {
  name: 'SinglePageDoctor',
  components: {
    SinglePageDash,
    SinglePageInfo,
    SinglePageMessage,
  },

  data() {
    return {
      arrDoctors: [],
      currentPage: 1,
      nPages: 0,
      store,
    }
  },

  methods: {
    getUsers() {
      axios
        .get(this.store.baseUrl + 'api/users/?i=', {
          params: {
            i: this.id,
          },
        })
        .then(response => {
          this.arrDoctors = response.data.results.data
          this.nPages = response.data.results.last_page
        });
    },
  },
  created() {
    this.getUsers();
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
.wallpaper {
  // background-image: url('src/assets/img/doc1.jpeg');
  background-size: cover;
  background-position: center;
}

.my-card {
  border-radius: 25px;
  border-width: 0;
  background-color: #e0e0e0;
  padding: 0;
  backdrop-filter: blur(50px);
  overflow: hidden;
}
</style>



