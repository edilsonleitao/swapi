<template>
  <div>
    <div class="title">Species</div>
    <q-separator class="separator" dark />
    <div class="count">{{ count }} Results</div>
    <species-table @selected-row="setSpecie" />
    <species-drawer v-model="specie" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import SpeciesTable from './SpeciesTable';
import SpeciesDrawer from './SpeciesDrawer';

const { mapGetters } = createNamespacedHelpers('species');
export default {
  components: { SpeciesTable, SpeciesDrawer },
  data() {
    return { drawerWidth: 500, drawerState: false, specie: null };
  },
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    setSpecie(specie) {
      this.specie = specie;
    },
  },
};
</script>
<style lang="sass" scoped>
.title
  font-size: 42px
  padding: 0 10px

.count
  padding: 10px 10px
  color: $grey-5
</style>
