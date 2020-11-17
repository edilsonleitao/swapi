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
        <p>Home</p>
      </q-tab-panel>
      <q-tab-panel name="Characters">
        <characters-view />
      </q-tab-panel>
      <q-tab-panel name="innerQwe">
        <p>Qwe</p>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import CharactersView from '../components/characters/CharactersView';

const { mapGetters } = createNamespacedHelpers('menu');
export default {
  components: { CharactersView },
  computed: {
    ...mapGetters(['menuOption']),
  },
};
</script>
<style lang="sass" scoped>
.tabs-container
  background-color: $grey-8
</style>
