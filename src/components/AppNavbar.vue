<script>


export default {

};
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-bg navbar-dark fixed-top shadow-lg bg-nav">
      <div class="container-fluid">

        <div class="d-flex align-items-center">

          <div class="d-flex align-items-center px-2">
            <router-link :to="{ name: 'home' }" class="nav-link active d-flex">
              <a class="navbar-brand">
                <img src="../assets/Doctor-logo.png" class="img-fluid" alt="" width="30">
              </a>
              <span class="d-flex align-items-center">
                <h4 class="text-logo mb-0">Bdoctors</h4>
              </span>
            </router-link>
          </div>


          <div class="ps-4 link d-flex">
            <div class="hover_link">
              <router-link class="mx-4" :to="{ name: 'home' }">
                <span class="text-white"><font-awesome-icon :icon="['fas', 'house']" class="icon_doctor" /> Home
                </span></router-link>
            </div>
            <div class="hover_link">
              <router-link class="mx-4" :to="{ name: 'user.index' }">
                <span class="text-white"> <font-awesome-icon :icon="['fas', 'user-doctor']" class="icon_doctor" />Cerca
                  tra i nostri medici
                </span>
              </router-link>
            </div>
          </div>



        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls=" navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto align-middle">

            <li class="mt-3 text-end nav_show">
              <router-link class="mx-4" :to="{ name: 'home' }">
                <span class="text-white"> Home <font-awesome-icon :icon="['fas', 'house']" class="icon_doctor" />
                </span></router-link>
            </li>

            <li class="mt-3 text-end nav_show">
              <router-link class="mx-4" :to="{ name: 'user.index' }">
                <span class="text-white"> Cerca tra i nostri medici <font-awesome-icon :icon="['fas', 'user-doctor']"
                    class="icon_doctor" />
                </span>
              </router-link>
            </li>

            <!-- <li class="nav-link flex-column text-end me-3">
              <a class="my-btn" href="http://localhost:8000/register">
                Sei un medico? Registrati!
              </a>
            </li> -->

            <li class="nav-link flex-column text-end">
              <a class="my-btn" href="http://localhost:8000/login">
                <font-awesome-icon :icon="['far', 'user']" class="px-1" /> Accedi
              </a>
            </li>

            <li class="d-flex align-items-center">
              <a class="register" href="http://localhost:8000/register">
                Sei un medico? Registrati!
              </a>
            </li>



          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import '../style/general.scss';


.img-fluid {
  filter: drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 rgb(101, 101, 101));
}

a.my-btn {
  text-decoration: none;
  border-radius: 25px;
  color: white;
  background-color: $main-color;
  padding: .5rem 1rem;
  transition: .20s;

  &:hover {
    background-color: $bg-color;
    border: 1.5px solid $main-color;
    color: $main-color;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}


a {
  text-decoration: none;
  transition: border-bottom-color 1s ease-in-out;
}

.register {
  color: white;
  font-size: .6rem;
}

.hover_link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  cursor: pointer;

  &:hover {
    background-color: rgb(60, 60, 60);
  }
}

.bg-nav {
  padding: 0;
  background-color: rgb(45, 45, 45);
}

.text-logo {
  color: white;
}

.navbar {
  min-height: 7vh;
}

.icon_doctor {
  font-size: 1.5rem;
  margin-right: .5rem;
}

.link {
  height: 100%;
  text-decoration: none;
  color: black;
  font-weight: 600;
}

.nav_show {
  display: none;
}

@media (max-width: 1000px) {
  .hover_link {
    display: none;
  }

  .nav-link {
    margin: 1rem;
  }

  .nav_show {
    padding: .5rem;
    display: block;

    &:hover {
      background-color: rgb(60, 60, 60);
    }

    .icon_doctor {
      padding-left: .5rem;
    }
  }

}
</style>

