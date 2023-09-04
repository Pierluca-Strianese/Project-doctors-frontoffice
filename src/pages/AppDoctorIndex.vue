<script>
import UsersList from "../components/UsersList.vue";

export default {
	components: {
		UsersList,
	},
};
</script>

<template>


<h2 class="text-center fst-italic fw-bold">Lista Dottori</h2>
<div class="d-flex justify-content-center flex-column">
	<UsersList />
</div>
	
</template>

<style lang="scss" scoped></style>