<template>
  <q-drawer
    v-if="value"
    :value="!!value"
    @input="$emit('input', null)"
    :width="drawerWidth"
    overlay
    elevated
    no-swipe-open
    behavior="mobile"
    content-class="bg-grey-7"
    side="right"
  >
    <q-card class="card" flat>
      <q-card-section>
        <q-btn flat color="white" rounded icon="clear" @click="$emit('input', null)"
      /></q-card-section>
      <q-card-section>
        <div class="title">{{ name }}</div>
        <q-separator class="separator" dark />
        <q-card class="text-dark">
          <sw-item title="Rotation Period:" :values="rotation_period" />
          <sw-item title="Orbital Period:" :values="orbital_period" />
          <sw-item title="Diameter:" :values="diameter" />
          <sw-item title="Climate:" :values="climate" />
          <sw-item title="Gravity:" :values="gravity" />
          <sw-item title="Terrain:" :values="terrain" />
          <sw-item title="Surface Water:" :values="surface_water" />
          <sw-item title="Population:" :values="population" />
        </q-card>
      </q-card-section>
    </q-card>
  </q-drawer>
</template>
<script>
import SWDrawerItem from '../SWDrawerItem';

export default {
  components: { 'sw-item': SWDrawerItem },
  props: {
    value: {
      type: Object,
    },
  },
  computed: {
    name() {
      return this.value && this.value.name;
    },
    rotation_period() {
      const period = this.value.rotation_period;
      if (period === 'unknown') return [period];
      return [`${period} hours`];
    },
    orbital_period() {
      const period = this.value.orbital_period;
      if (period === 'unknown') return [period];
      return [`${period} hours`];
    },
    diameter() {
      const { diameter } = this.value;
      if (diameter === 'unknown') return [diameter];
      return [`${diameter} Km`];
    },
    climate() {
      return [this.value.climate];
    },
    gravity() {
      return [this.value.gravity];
    },
    terrain() {
      return [this.value.terrain];
    },
    surface_water() {
      const { surface_water: percent } = this.value;
      const waterPercent = Number(percent);
      if (!Number.isInteger(waterPercent)) return [percent];
      return [`${waterPercent}%`];
    },
    population() {
      return [this.value.population];
    },
    drawerWidth() {
      return this.$q.screen.width <= 500 ? this.$q.screen.width - 25 : 500;
    },
  },
};
</script>
<style lang="sass" scoped>
.card
  background: $grey-7
  height: 100%

  .title
    font-size: 28px

  .separator
    margin-bottom: 20px
</style>
