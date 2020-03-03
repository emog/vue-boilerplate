// Import Vue
import Vue from 'vue';

// Import Vue App, routes, store, filters
import App from '@/App';
import store from '@/store';
import router from '@/router'
import '@/filters';

import NProgress from 'vue-nprogress'

Vue.use(NProgress, {
    latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
    router: true, // Show progressbar when navigating routes, default: true
    http: false // Show progressbar when doing Vue.http, default: true
});

const nprogress = new NProgress();

Vue.config.productionTip = false;


//Configure nprogress


new Vue({
    el: '#app',
    render: h => h(App),
    nprogress,
    router,
    store
});
