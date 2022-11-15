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
            <p>C'est ici que vous pourrez visualiser les posts de vos collègues ou que vous pouvez vous-même poster quelque-chose.</p>
        </div>
</template>

<script>

export default {
    /*eslint-disable*/
    name: "Accueil",
}

</script>

<style>
*{
    font-family: 'Lato', sans-serif;
}

.navbar-brand{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}

nav.navbar.bg-light{
    background: #ffd7d7!important;
    border-bottom: solid #4E5166 1px;
    margin-top: -60px;
}

.d-flex{
    width: 15%;
}

.lienIndex img{
    width: 50%;
}

.connexion {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 50%;
}

.connexion li{
    list-style-type: none;
    padding-right: 25px;
    color: black;
}

.connexion li a{
    text-decoration: none;
    color: black;
}

.connexion li a:hover{
    font-weight: bold;
}

.container h1{
    text-align: center;
    padding-top: 25px;
}

.card.gedf-card {
    background: #ffd7d7;
    width: 45%;
    margin-left: 7.5%;
    margin-top: 5%;
    box-shadow: #4E5166 4px 2px 4px;
    border-radius: 25px;
}

.card-header {
    border: solid #ffd7d7!important;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #ffd7d7!important;
}

.card-header-tabs {
    margin-left: 0px!important;
    margin-right: 0px!important;
}

.card-body {
    margin-left: 15px;
    margin-right: 15px;
}

.card-header-tabs .nav-link.active {
    border-bottom: solid 0.5px #4E5166!important;
    background-color: #f8b6b6!important;
}

button.btn.btn-secondary {
    background: white;
    color: #fd2d01;
    margin-top: 15px;
}

.nav-tabs .nav-link {
    color: #4E5166;
}

.englobeForm{
    border: solid #4E5166 1px;
    margin-left: 25%;
    border-radius: 5px;
    margin-top: 25px;
    padding-top: 25px;
    padding-bottom: 22.5px;
    width: 48%;
}

.row.mb-4{
    display: flex;
    justify-content: center;
}

button.btn.btn-primary{
    border: solid #4E5166 1px;
    background: #ffd7d7;
    color: black;
}

button.btn.btn-primary.connect{
    border: solid #4E5166 1px;
    background: #ffd7d7;
    color: black;
}
</style>