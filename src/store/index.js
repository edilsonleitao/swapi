import Vue from 'vue';
import Vuex from 'vuex';

import menu from './menu';

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      menu,
    },
    strict: process.env.DEBUGGING,
  });
  return Store;
}
