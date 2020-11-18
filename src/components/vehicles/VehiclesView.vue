<template>
  <div>
    <div class="title">Vehicles</div>
    <q-separator class="separator" dark />
    <div class="count">{{ count }} Results</div>
    <vehicles-table @selected-row="setVehicle" />
    <vehicles-drawer v-model="vehicle" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import VehiclesTable from './VehiclesTable';
import VehiclesDrawer from './VehiclesDrawer';

const { mapGetters } = createNamespacedHelpers('vehicles');
export default {
  components: { VehiclesTable, VehiclesDrawer },
  data() {
    return { drawerWidth: 500, drawerState: false, vehicle: null };
  },
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    setVehicle(vehicle) {
      this.vehicle = vehicle;
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
