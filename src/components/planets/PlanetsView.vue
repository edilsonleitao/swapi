<template>
  <div>
    <div class="title">Planets</div>
    <q-separator class="separator" dark />
    <div class="count">{{ count }} Results</div>
    <planets-table @selected-row="setPlanet" />
    <planets-drawer v-model="planet" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import PlanetsTable from './PlanetsTable';
import PlanetsDrawer from './PlanetsDrawer';

const { mapGetters } = createNamespacedHelpers('planets');
export default {
  components: { PlanetsTable, PlanetsDrawer },
  data() {
    return { drawerWidth: 500, drawerState: false, planet: null };
  },
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    setPlanet(planet) {
      this.planet = planet;
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
