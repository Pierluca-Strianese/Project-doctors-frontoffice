<script>


export default {

};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-bg navbar-dark fixed-top shadow-lg bg-nav">
    <div class="container-fluid px-5">

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


        <div class="ps-4">
          <router-link class="home" :to="{ name: 'home' }">
            <span class="text-white"> Home </span></router-link>

          <router-link class="home" :to="{ name: 'user.index' }">
            <span class="text-white"> Cerca tra i nostri medici </span></router-link>
        </div>



      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls=" navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto align-middle">

          <li class="nav-link flex-column text-center me-3">
            <a class="my-btn" href="http://localhost:8000/register">
              Sei un medico? Registrati!
            </a>
          </li>

          <li class="nav-link flex-column text-center me-3">
            <a class="my-btn" href="http://localhost:8000/login">
              Accedi
            </a>
          </li>



        </ul>
      </div>

    </div>
  </nav>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

.img-fluid {
  filter: drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 rgb(101, 101, 101));
}

.home {
  text-decoration: none;
  cursor: pointer;
  border-right: 2px solid white;
  padding: .2rem 1rem;

  .home:hover {
    text-decoration-line: underline;
  }
}

a.my-btn {
  text-decoration: none;
  border-radius: 25px;
  color: white;
  background-color: #0a9e8f;
  padding: .5rem 1rem;
  transition: .25s;
  border: 0px;

  &:hover {
    background-color: #037066;
    color: whitesmoke;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}

li {
  list-style-type: none;

  a {
    text-decoration: none;
    color: white;
    transition: border-bottom-color 1s ease-in-out;
  }
}


.bg-nav {
  background-color: rgb(45, 45, 45);
}

.navbar {
  min-height: 10vh;
}

.text-logo {
  color: white;
}

.navbar {
  min-height: 6vh;
}

.icon {
  height: 2rem;
  width: 2rem;
}

.link {
  text-decoration: none;
  color: black;
  font-weight: 600;
}
</style>