<template>
  <q-page class="main-page">
    <q-tab-panels
      :value="menuOption"
      animated
      swipeable
      infinite
      transition-prev="fade"
      transition-next="fade"
      class="tabs-container text-white"
    >
      <q-tab-panel name="Home">
        <home-view />
      </q-tab-panel>
      <q-tab-panel name="Characters">
        <characters-view />
      </q-tab-panel>
      <q-tab-panel name="Species">
        <species-view />
      </q-tab-panel>
      <q-tab-panel name="Planets">
        <planets-view />
      </q-tab-panel>
      <q-tab-panel name="Starships">
        <starships-view />
      </q-tab-panel>
      <q-tab-panel name="Vehicles">
        <vehicles-view />
      </q-tab-panel>
      <q-tab-panel name="Movies">
        <movies-view />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import CharactersView from '../components/characters/CharactersView';
import SpeciesView from '../components/species/SpeciesView';
import PlanetsView from '../components/planets/PlanetsView';
import StarshipsView from '../components/starships/StarshipsView';
import VehiclesView from '../components/vehicles/VehiclesView';
import MoviesView from '../components/movies/MoviesView';
import HomeView from '../components/HomeView';

const { mapGetters } = createNamespacedHelpers('menu');
export default {
  components: {
    CharactersView,
    SpeciesView,
    PlanetsView,
    StarshipsView,
    VehiclesView,
    MoviesView,
    HomeView,
  },
  computed: {
    ...mapGetters(['menuOption']),
  },
};
</script>
<style lang="sass" scoped>
.tabs-container
  background-color: $grey-8
</style>
