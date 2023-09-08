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
			await new Promise(() => { });
			this.$router.push({
				name: "user.index",
				query: { q: this.searchString },
			});
		},


		clearSearch() {
			this.store.search = null;
			this.$router.push({ query: { ...this.$route.query, q: null } });
		},

		resetUserView() {
			this.store.search = null;
			this.$router.push({ name: "users", query: {} });
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
	<h2 class="text-center list fst-italic fw-bold">Qui trovi tutti i nostri medici</h2>
	<div class="container">

		<form class="d-flex w-100" role="search" @submit.prevent="executeSearch">

			<div class="row"></div>
			<input class="form-control col-6" type="search" placeholder="Scrivi qui" aria-label="Cerca qui" name="q"
				v-model="searchString" />
			<button class="btn btn-outline-success" type="submit">Cerca</button>

			<div class="col-6"></div>
		</form>



		<div class="d-flex justify-content-center flex-column">
			<UsersList />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.list {
	margin-top: 8rem;
	margin-bottom: 2rem;
}
</style>