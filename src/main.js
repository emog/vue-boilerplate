// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store, filters
import App from '@/App';
import routes from '@/routes';
import store from '@/store';
import '@/filters';

//Plugins
// import '@/plugins/axios';


Vue.config.productionTip = false;

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
