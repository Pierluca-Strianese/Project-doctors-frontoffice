<script>

import UsersList from "../components/UsersList.vue";
import { store } from '../store';


export default {
	data() {
    return {
      searchString: "",
      store,
    };
  },

  methods: {
    
    async executeSearch() {
      this.store.search = this.searchString;
      await new Promise(() => {});
      this.$router.push({
        name: "user.index",
        query: { q: this.searchString },
      });
    },
 

		clearSearch() {
			this.store.search = null;
			this.$router.push({query: {...this.$route.query, q: null}});
		},

		resetUserView() {
			this.store.search = null;
			this.$router.push({name: "users", query: {}});
		},
	},

	created() {
		this.clearSearch();
	},

	watch: {
		$route() {
			this.searchString = "";
			this.store.search = null;
		},
	},
	
	components: {
		UsersList,
	},

};
</script>

<template>

<h2 class="text-center fst-italic fw-bold">Lista Dottori</h2>

<form class="d-flex w-100" role="search" @submit.prevent="executeSearch">
  <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="q"
        v-model="searchString" />
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>



<div class="d-flex justify-content-center flex-column">
	<UsersList />
</div>
	
</template>

<style lang="scss" scoped></style>