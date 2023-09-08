<script>
export default {
	data() {
		return {
			specializationId: null,
		};
	},

	props: {
		arrSpecializations: {
			type: Array,
			required: true,
		},

	},

	watch: {
		arrSpecializations() {
			this.specializationId = this.arrSpecializations.length
				? this.arrSpecializations[0].id
				: null;
		},




	},



}
</script>


<template>
	<div class="d-flex list mt-5">
		<form class="">
			<h4 class="mt-5 mb-4">Seleziona la specializzazione che cerchi</h4>
			<div class="d-flex align-items-center">
				<label for="type">Specializzazioni:</label>
				<select id="specialization" class="form-select ms-2"
					@change="$emit('changeSpecialization', specializationId)" v-model="specializationId">
					<option value="">Tutti</option>
					<option v-for="specialization in arrSpecializations" :key="specialization.id"
						:value="specialization.id">
						{{ specialization.name }}
					</option>
				</select>
			</div>
		</form>
	</div>
</template>


<style lang="scss" scoped></style>
