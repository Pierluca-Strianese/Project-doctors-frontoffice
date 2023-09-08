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
			<input class="form-control col-6" type="search" placeholder="Inserisci nome del Dottore che cerchi"
				aria-label="Cerca qui" name="q" v-model="searchString" />
			<button class="btn btn-outline-success mx-5 card__btn card_2" type="submit">
				Cerca
			</button>

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


.card__btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8rem;
	height: 2.5rem;
	border: 2px solid #00bdcd;
	text-decoration: none;
	border-radius: 1rem;
	font-size: .7rem;
	color: #00bdcd;
	background: #ffffff;
	text-transform: uppercase;
	transition: all .5s ease;

	&:hover {
		background: #00bdcd;
		color: #ffffff;
	}
}

.card_2 {
	background: #00bdcd;
	color: #ffffff;

	&:hover {
		background: #ffffff;
		color: #00bdcd;
	}
}
</style>