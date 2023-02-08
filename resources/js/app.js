require('./bootstrap');
import { createApp } from 'vue'
import App from './components/Home.vue'

//import router
import router from './router'

//import Bootstrap, Popper, jQuery
// import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')