<script>
// export default {
//     data() {
//         return {
//             searchString: "",
//         };
//     },
// };
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">
                <img class="icon" src="../assets/img/stethoscope.jpg" alt="">
                <span class="me-3">AppleDoctor</span>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dottori
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Inserire specializzazioni varie</a></li>
                            <!-- <li><a class="dropdown-item" href="#">Another action</a></li> -->
                            <!-- <li>
                                <hr class="dropdown-divider">
                            </li> -->
                            <!-- <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                        </ul>
                    </li>
                </ul>

                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link mx-3 btn btn-light" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Accedi
                        </a>

                        <ul class="dropdown-menu dropdown-menu-end me-3">
                            <li> <router-link :to="{ name: 'login' }" class="nav-link active" aria-current="page">Log
                                    In</router-link></li>
                            <li>
                                <router-link :to="{ name: 'register' }" class="nav-link active"
                                    aria-current="page">Registrati</router-link>
                            </li>
                        </ul>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
.navbar {
    min-height: 6vh;
}

.icon {
    height: 2rem;
    width: 2rem
}

@import "../node_modules/bootstrap/scss/bootstrap";
</style>
