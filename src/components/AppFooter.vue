<script>
export default {};
</script>

<template>
  <footer>
    <div class="container_responsive px-5">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="single-box">
            <!-- <img src="img/logo.png" alt=""> -->
            <p>Benvenuti su BDoctors - Trova il Dottore Giusto per Te! La soluzione semplice e
              affidabile per
              individuare il medico specialista perfetto per la tua patologia. Attraverso una vasta rete di
              professionisti medici altamente qualificati, BDoctors ti mette in contatto con esperti in vari
              campi medici, garantendo cure mirate e personalizzate.</p>
            <h3>We Accect</h3>
            <!-- <div class="card-area">
              <font-awesome-icon class="fs-5 p-1" :icon="['fab', 'cc-visa']" />
              <font-awesome-icon class="fs-5 p-1" :icon="['fab', 'cc-mastercard']" />
              <font-awesome-icon class="fs-5 p-1" :icon="['fab', 'cc-paypal']" />
              <font-awesome-icon class="fs-5 p-1" :icon="['fab', 'cc-apple-pay']" />
            </div> -->
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-box">
            <h2>Informazioni su BDoctors</h2>
            <ul>
              <li><a href="#">Chi siamo</a></li>
              <li><a href="#">Lavora con noi </a></li>
              <li><a href="#">Hai bisogno di aiuto?</a></li>
              <li><a href="#">Contatti</a></li>
              <li><a href="#">Condizioni di Servizio</a></li>
              <li><a href="#">Privacy e cookies</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-box">
            <h2>Per i pazienti</h2>
            <ul>
              <li><a href="#">Dottori</a></li>
              <li><a href="#">Medici di base</a></li>
              <li><a href="#">Strutture</a></li>
              <li><a href="#">Chiedi al dottore</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">App mobile</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-box">
            <h2>Newsletter</h2>
            <p>Iscriviti alla nostra Newsletter BDoctors per rimanere sempre aggiornato sulle ultime novità nel
              mondo della medicina e delle cure specialistiche.</p>
            <h2>Follow us on</h2>
            <!-- <p class="socials">
              <font-awesome-icon class="fs-5 p-1" :icon="['fab', 'square-facebook']" />
              <font-awesome-icon class="fs-5 p-1" :icon="['fab', 'square-twitter']" />
              <font-awesome-icon class="fs-5 p-1" :icon="['fab', 'square-instagram']" />
              <font-awesome-icon class="fs-5 p-1" :icon="['fab', 'square-whatsapp']" />
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- END OF FOOTER -->
</template>

<style lang="scss" scoped>
/* STYLES SPECIFIC TO FOOTER  */

@media (min-width: 1000px) {
  footer .container_responsive {
    display: flex;
  }
}

.container_responsive {
  display: none;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: #070617;
  font-size: .8rem;
  padding: 2rem;
}

.single-content {
  text-align: center;
  padding: 1rem 0;
}

.single-box p {
  color: #fff;
  line-height: 1.9;
}

.single-box h3 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

.single-box .card-area i {
  color: #ffffff;
  font-size: 20px;
  margin-right: 10px;
}

.single-box ul {
  list-style: none;
  padding: 0;
}

.single-box ul li a {
  text-decoration: none;
  color: #fff;
  line-height: 2.5;
  font-weight: 100;
}

.single-box h2 {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}

#basic-addon2 {
  background: #fe1e4f;
  color: #fff;
}

.socials i {
  font-size: 18px;
  margin-right: 15px;
}

@media (max-width: 767px) {
  .single-box {
    margin-bottom: 50px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .single-box {
    margin-bottom: 50px;
  }
}
</style>
