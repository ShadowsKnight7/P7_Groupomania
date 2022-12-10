<!--eslint-disable-->
<!-- je remarque que tu n'utilise pas le principe de composant pour les élément réutilisable comme le header (ta balise nav)  -->
<!-- l'interet des composant c'est de découpe le code en petit bout qui sont réutilisable et facilement modifiable -->
<!-- par exemple au lieu d'avoir 4 fois ta navbar tu aurais un composant que tu appelle 1 fois , ça fais une enorme économie de code -->
<!-- et je pense que sur un élément aussi global qui seras sur toutes les pages du site tu peux surement le mettre dans app.vue -->
<!-- une bonne pratique de vue est d'avoir des page et des components ce qui permet de mieux découper le code -->
<!--  tu peux garder le fais qu'un composant est égale a une page mais ça peut vite devenir lourd -->
<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link to="/" class="lienIndex">
          <img src="../assets/groupomania.png" class="d-flex align-text-top" />
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
        <label for="inputEmail3" class="col-sm-2 col-form-label" id="mail"
          >E-Mail</label
        >
        <div class="col-sm-3">
          <input
            id="inputEmail3"
            type="email"
            placeholder="Adresse E-mail"
            required="required"
            v-model="email"
            class="form-control"
          />
        </div>
      </div>

      <div class="row mb-4">
        <label for="inputPassword3" class="col-sm-2 col-form-label" id="mdp"
          >Mot de passe</label
        >
        <div class="col-sm-3">
          <input
            id="inputPassword3"
            type="password"
            placeholder="Mot de passe"
            required="required"
            v-model="password"
            class="form-control"
          />
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        id="connexionButton"
        @click.prevent="logUser(email, password)"
      >
        Se connecter
      </button>
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
    };
  },

  methods: {
    logUser() {
      const user = {
        email: this.email,
        password: this.password,
      };
      const url = "http://localhost:4000/api/auth/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          // ! tu ne reçois pas l'email et le password apres ta requete donc les verifier ne sert a rien et
          // je te déconseille vraiment de stocker sur le localstorage l'email et les password (même hasher)
          // ces info sont privé et rendre accesible le password dans le storage local permet au hacker d'acceder au compte facile
          // en plus il manque la valeur a tes setitem il te faut une clef et une valeur par exemple la clé mail aurait la valeur test@gmail.com

          // if (data.email && data.password) {
          //   let email = data.email;
          //   let password = data.password;
          //   localStorage.setItem(email);
          //   localStorage.setItem(password);
          // } else {
          //   alert("Erreur de saisie dans l'email ou dans le mot de passe.");
          // }

          if (data.error) {
            // je te déconseille d'utiliser les alerts c'est pas agréable pour les utilisateur
            // je te conseille plus de faire une modal qui apparait en rouge en haut de l'écran
            // c'est assez clair pour l'utilisateur sur le fais qu'il y a un probleme et ne le gene pas
            alert(data.error);
            return;
          }
          if (data.userId) {
            // je te stocke en localstorage le fais que l'utilisateur est connecter et sont userId mais c'est pas forcément recommander d'y stocker la
            // je te laisserais regarder un moyen de mieux sécuriser ça
            localStorage.setItem("logged", true);
            localStorage.setItem("userId", data.userId);
            // je change la page apres avoir obtenu la connexion
            this.$router.push("/post");
          }
        })

        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}
</style>
