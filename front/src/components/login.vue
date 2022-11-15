<!--eslint-disable-->
<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <div class="navbar-brand">
                <router-link to="/" class="lienIndex">
                  <img src="../assets/groupomania.png" class="d-flex align-text-top">
                </router-link>

                <ul class="connexion">
                  <li><router-link to="/signup">Inscription</router-link></li>
                  <li><router-link to="/login">Connexion</router-link></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <h1 id="bienvenue">Bienvenue sur l'intranet de Groupomania</h1>
    </div>

    <div class="englobeForm">    
        <form>
            <div class="row mb-4">
              <label for="inputEmail3" class="col-sm-2 col-form-label" id="mail">E-Mail</label>
                <div class="col-sm-3">
                    <input id="inputEmail3" type="email" placeholder="Adresse E-mail" required="required" v-model="email" class="form-control">
                </div>
            </div>

            <div class="row mb-4">
            <label for="inputPassword3" class="col-sm-2 col-form-label" id="mdp">Mot de passe</label>
                <div class="col-sm-3">
                    <input id="inputPassword3" type="password" placeholder="Mot de passe" required="required" v-model="password" class="form-control">
                </div>
            </div>

            <button type="submit" class="btn btn-primary" id="connexionButton" @click.prevent="logUser(email, password)">Se connecter</button>
        </form>
    </div>
</template>

<script>
  export default {
  /*eslint-disable*/
      name: "login",
      data() {
          return {
              email: "",
              password: "",
              error: this.error,
          }
      },
  
      methods: {
        logUser() {
          const user = {
            email: this.email,
            password: this.password,
          }
          const url = 'http://localhost:3000/api/auth/login';
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
          }
  
          fetch(url, options)
          .then(response => response.json())
          .then((data) => {
          if (data.email && data.password) {
            let email = data.email;
            let password = data.password;
            localStorage.setItem(email);
            localStorage.setItem(password);
          }
          else {
            alert("Erreur de saisie dans l'email ou dans le mot de passe.")
          }
  
        if (data.errors) {
          const findMsg = data.errors.find(function (element) {
            return element.msg
          });
            if (findMsg) {
            alert(findMsg.msg);
            return;
          }
        } else {
          this.$router.push("/post");
        }
    })
  
              .catch(error =>
              console.log(error));
          }
      }
  }
  </script>

<style>
*{
    font-family: 'Lato', sans-serif;
}
</style>