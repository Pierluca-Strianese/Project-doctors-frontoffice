<script>
import UsersList from "../components/UsersList.vue";
export default {
    components: {
        UsersList,
    }
}
</script>

<template>
    <!-- Image Header -->
    <div class="jumbo_1 d-flex align-items-center">
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col">
                    <h1>Titolo di Benvenuto</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore recusandae nisi excepturi fuga culpa
                        ex. Mollitia praesentium fugit ex ipsam itaque soluta debitis aperiam. Ex fuga nam sint nostrum.
                        Harum.</p>
                    <div class="bts">
                        <button class="btn btn-outline-primary m-3">Button 1</button>
                        <button class="btn btn-outline-primary m-3">Button 2</button>
                    </div>
                </div>
                <div class="col">
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    </div>
    <div class="container_one">
        <h2 class="mt-4 text-center"> Cerca lo specialista più adatto a te <i class="fa-solid fa-magnifying-glass"></i></h2>
        <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </span>
        </div>
    </div>
    <div class="section_two">
        <h2 class="mt-4 text-center"> I nostri migliori medici </h2>
        <UsersList />
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.jumbo_1 {
    /* The image used */
    background-image: url("../assets/img/doc3jumbo.jpeg");
    max-width: 100%;
    height: 94vh;
    // Da sistemare height bg perché NON responsive
    background-size: cover;
    background-position: center;
}
</style>