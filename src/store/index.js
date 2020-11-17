import Vue from 'vue';
import Vuex from 'vuex';

import menu from './menu';
import characters from './characters';

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      menu,
      characters,
    },
    strict: process.env.DEBUGGING,
  });
  return Store;
}
