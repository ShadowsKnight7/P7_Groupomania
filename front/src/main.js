import { createApp } from 'vue'
import App from './App.vue'
import accueil from './components/accueil.vue'
import login from './components/login.vue'
import signup from './components/signup.vue'
import post from './components/post.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'accueil',
        path: '/',
        component: accueil,
        meta: {
            title: 'Accueil',
        }
    },
    {
        name: 'signup',
        path: '/signup',
        component: signup,
        meta: {
            title: 'Inscription',
        }
    }, {
        name: 'login',
        path: '/login',
        component: login,
        meta: {
            title: 'Connexion',
        }
    }, {
        name: 'post',
        path: '/post',
        component: post,
        meta: {
            title: 'Post',
        }
    }
];

const router = createRouter({history: createWebHistory(), routes })

createApp(App).use(router)
const app = createApp (App)
app.use (router)

app.mount('#app')

router.afterEach((to) => {
    document.title = to.meta.title;
})