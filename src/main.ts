import 'bootstrap'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAxios from 'vue-axios'
import axios from './http/axios';

import './assets/style.css';

import Container from './components/Container.vue';

createApp(App)

.use(router)
.use(store)
.use(VueAxios, axios)

.component('container', Container)

.mount('#app');