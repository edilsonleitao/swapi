import Vue from 'vue';
import Vuex from 'vuex';

import menu from './menu';
import characters from './characters';
import species from './species';

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      menu,
      characters,
      species,
    },
    strict: process.env.DEBUGGING,
  });
  return Store;
}
