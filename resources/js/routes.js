import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';

export const routes = [{
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/',
        component: Login
    }
];