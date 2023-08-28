<script>
import axios from 'axios';

export default {
  name: 'SinglePageMessage',
  data() {
    return {
      formData: {
        userId: this.userId,
        name: '',
        surname: '',
        email: '',
        text: '',
        showMessage: false,
      }
    }
  },
  props: {
    'doctor': {
      type: Object,
      required: true,
    },
    'review': {
      type: Object,
      required: true,
    },
    'userId': {
      type: Number,
      required: true,
    },
  },

  methods: {
    sendMessage() {
      axios.post('http://127.0.0.1:8000/api/messages', this.formData)
        .then(response => {
          // Gestisci la risposta del backend
        })
        .catch(error => {
          // Gestisci gli errori di invio
        });
    },

    clearInput() {
      this.formData.name = '';
      this.formData.surname = '';
      this.formData.email = '';
      this.formData.text = '';
    },

    onSubmit() {
      this.sendMessage();
      this.clearInput();
      this.showMessage = true;
    }
  },

}
</script>

<template>
  <section id="messagges" class="my-card shadow-lg mb-4">
    <div class="info-title d-flex justify-content-center">
      <h5 class="m-0">Invia un messaggio</h5>
    </div>

    <div class="p-4">
      <div class="container-fluid">
        <form class="row justify-content-between" action="/messages" method="POST" @submit.prevent="onSubmit">
          <div class="name col-12 col-md-3 ">
            <label for="name">
              <h6>Nome(*):</h6>
            </label>
            <input class="d-block form-control" required v-model="formData.name" name="name" type="text" id="name">
          </div>

          <div class="surname col-12 col-md-3 ">
            <label for="surname">
              <h6>Cognome(*):</h6>
            </label>
            <input class="d-block form-control" required v-model="formData.surname" name="surname" type="text"
              id="surname">
          </div>

          <div class="email col-12 col-md-3">
            <label for="email">
              <h6>Email(*):</h6>
            </label>
            <input class="d-block form-control" required v-model="formData.email" name="email" type="email" id="email">
          </div>

          <div class="mex-text mt-4 col-12 ">
            <label for="mex-text">
              <h6>Testo(*):</h6>
            </label>
            <textarea name="text" required v-model="formData.text" id="mex-text" class="form-control"></textarea>
          </div>

          <div class="mb-3">
            (*) I campi sono obbligatori
          </div>
          <div class="button-sub d-flex justify-content-start">
            <button class="my-btn" type="submit">Invia</button>
          </div>

        </form>

        <div class="alert alert-success" v-if="showMessage">
          Messaggio inviato con successo!
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;


.info-title {
  padding: 1rem;
  background-color: $primary-color;
  color: $secondary-text-color;
}

input {
  :valid {
    border: 2px solid black;
  }

  :invalid {
    border: 1px solid lightgrey;
  }
}

select select {
  :valid {
    border: 2px solid black;
  }

  :invalid {
    border: 1px solid lightgrey;
  }
}

textarea {
  :valid {
    border: 2px solid black;
  }

  :invalid {
    border: 1px solid lightgrey;
  }
}
</style>