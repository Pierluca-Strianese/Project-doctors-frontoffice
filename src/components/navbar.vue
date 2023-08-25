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
            <img class="icon" src="../assets/img/stethoscope.jpg" alt="">
            <span class="me-3">AppleDoctor</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <li> <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">Home</router-link></li> 
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
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Scrivi qui" aria-label="Search">
                    <button class="btn btn-outline-primary" type="submit">Cerca</button>
                </form>

                <!-- <img class="icon ms-4" src="../assets/img/icon.png" alt=""> -->
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item dropstart">
                        <a class="nav-link mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Accedi
                        </a>

                        <ul class="dropdown-menu">
                           <li> <router-link :to="{ name: 'login' }" class="nav-link active" aria-current="page">Log In</router-link></li> 
                            <!-- <li><a class="dropdown-item" href="{{ route('admin.profile.edit') }}">Log In</a></li> -->
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
.icon {
    height: 2rem;
    width: 2rem
}

@import "../node_modules/bootstrap/scss/bootstrap";
</style>
