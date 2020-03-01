import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * Load store modules manually.
 * If you want to load them manually please uncomment the lines below
 * and comment/remove the "Load store modules dynamically" section
 * */
// import * as defaultModule from './modules/default';
// export default new Vuex.Store({
//     modules: { 'default': defaultModule }
// });


/**
 * Load store modules dynamically.
 * If you want to load them manually please comment/remove the lines below and uncomment the lines above
 * */
const requireContext = require.context('./modules', false, /.*\.js$/);

const modules = requireContext.keys()
    .map(file => [ file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file) ])
    .reduce((modules, [ name, module ]) => {
        if (module.namespaced === undefined) {
            module.namespaced = true;
        }
        return { ...modules, [name]: module };
    }, {});


export default new Vuex.Store({
    modules: modules
});
