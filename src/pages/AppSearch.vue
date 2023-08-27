<script>
import Appcard from '../components/Appcard.vue';
export default {
    components: {
        Appcard,
    }
}
</script>

<template>
    <h1 class="text-center"> Ricerca Avanzata </h1>
    <div class="container">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <h4 class="text-center pb-2 mt-4 border-bottom"> filtri </h4>
        <div class="container_filtri">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>
        </div>
        <div>
            <Appcard />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container_filtri {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    margin-inline: auto;

    .form-check {
        flex: 0 0 calc(100% / 5);
    }
}
</style>