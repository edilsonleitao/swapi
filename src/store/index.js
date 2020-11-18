import Vue from 'vue';
import Vuex from 'vuex';

import menu from './menu';
import characters from './characters';
import species from './species';
import planets from './planets';

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      menu,
      characters,
      species,
      planets,
    },
    strict: process.env.DEBUGGING,
  });
  return Store;
}
