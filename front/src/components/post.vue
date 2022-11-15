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
        <h1 id="bienvenue">Bienvenue WilliamR !</h1>
    </div>

    <div class="card gedf-card">
        <div class="post-heading">
            <div class="pull-left image">
                <img src="../assets/avatar.png" class="img-circle avatar" alt="user profile image">
            </div>
            <div class="pull-left meta">
                <div class="title h5">
                    <b>WilliamR</b>
                </div>
            </div>
        </div>

        <div class="card-body">
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                    <div class="form-group">
                        <label class="sr-only" for="message"></label>
                        <textarea class="form-control" id="message" rows="3" placeholder="Dîtes quelque-chose..."></textarea>
                    </div>
                </div>
            </div>

                <div class="btn-toolbar justify-content-between">
                <div class="btn-group">
                    <label for="file"></label>
                    <input type="file" id="file" name="file">
                </div>
            </div>
            <div class="btn-toolbar justify-content-between">
                <div class="btn-group">
                    <button type="submit" class="btn btn-secondary">Publier</button>
                </div>
            </div>
        </div>
    </div>



    <!--<div class="container bootstrap snippets bootdey">
        <div class="col-sm-8">
            <div class="panel panel-white post panel-shadow">
                <div class="post-heading">
                    <div class="pull-left image">
                        <img src="../assets/avatar.png" class="img-circle avatar" alt="user profile image">
                    </div>
                    <div class="pull-left meta">
                        <div class="title h5" id="creationMaintenant">
                            <b>WilliamR.</b>
                        </div>
                        <h6 class="text-muted time">A l'instant</h6>
                    </div>
                </div> 
                <div class="post-description"> 
                    <p>Bonnes vacances à tous les collaborateurs !</p>
                    <img src="../Images/bonnesVacances.jpg">
                    <div class="stats">
                            <i class="fa fa-thumbs-up icon"></i>
                            <p>Modifier</p>
                            <p>Supprimer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>*-->
</template>

<script>

</script>



<style >
*{
    font-family: 'Lato', sans-serif;
}
</style>