<script>


export default {
 
};
</script>

<template>
 <nav class="navbar navbar-expand-md navbar-bg navbar-dark fixed-top shadow-lg bg-nav">
    <div class="container">

      <div class="d-flex align-items-center">
        <a class="navbar-brand">
          <img src="../assets/Doctor-logo.png" class="img-fluid" alt="" width="40">
        </a>
        <h2 class="text-logo mb-0">Bdoctors</h2>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls=" navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto align-middle">
          
          <li class="nav-link flex-column text-center me-3">
            <a class="my-btn" href="http://localhost:8000/register">
              Sei un dottore? Registrati!
            </a>
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
