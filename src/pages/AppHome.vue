<script>
import Appcard from "../components/Appcard.vue"
import UsersList from "../components/UsersList.vue";
export default {
    components: {
        Appcard,
        UsersList,
    }
}
</script>

<template>
    <!-- Image Header -->
    <div class="jumbo d-flex align-items-center">
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

    <UsersList />
</template>

<style lang="scss" scoped>
.jumbo {
    /* The image used */
    background-image: url("../assets/img/doc3jumbo.jpeg");
    max-width: 100%;
    height: 90vh;
    // Da sistemare height bg perché NON responsive
    background-size: cover;
    background-position: center;
}
</style>