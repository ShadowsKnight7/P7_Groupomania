<template>
  <nav>
    <router-link to="/"></router-link>
    <router-link to="/signup"></router-link>
    <router-link to ="/login"></router-link>
    <router-link to="/post"></router-link>
  </nav>
  <router-view />
</template>

<script>

import signup from './components/signup.vue';
import login from './components/login.vue';
import post from './components/post.vue';

export default {
  name: 'App',
  /*eslint-disable*/
  components: {
    signup,
    login,
    post,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
