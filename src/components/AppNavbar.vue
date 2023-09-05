<script>
import { store } from "../store";
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
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div>
        <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">
          <img class="icon" src="../assets/img/stethoscope.jpg" alt="">
          <span class="me-3">BDoctor</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'user.index' }" class="nav-link active">
          <span class="me-3">Dottori</span>
        </router-link>
      </div>

      <!-- DIV CONTATTA DI PROVA PER MAIL TRAP -->
      <div>
        <router-link :to="{ name: 'contact' }" class="nav-link active">
          <span class="me-3">Contatta</span>
        </router-link>
      </div>

      <form class="d-flex w-100" role="search" @submit.prevent="executeSearch">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="q"
          v-model="searchString" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link mx-3 btn btn-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Accedi
            </a>

            <ul class="dropdown-menu dropdown-menu-end me-3">
              <li>
                <a href="http://localhost:8000/login" class="link px-3 py-1">Login</a>
              </li>
              <li>
                <a href="http://localhost:8000/register" class="link px-3 py-1">Register</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

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
