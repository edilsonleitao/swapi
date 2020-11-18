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
          <sw-item title="Class:" :values="vehicle_class" />
          <sw-item title="Model:" :values="model" />
          <sw-item title="Manufacturer:" :values="manufacturer" />
          <sw-item title="Atmosphering Speed:" :values="max_atmosphering_speed" />
          <sw-item title="Crew:" :values="crew" />
          <sw-item title="Passengers:" :values="passengers" />
          <sw-item title="Cost:" :values="cost" />
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
    vehicle_class() {
      return [this.upperFirtsLetter(this.value.vehicle_class)];
    },
    model() {
      return [this.value.model];
    },
    manufacturer() {
      return [this.value.manufacturer];
    },
    max_atmosphering_speed() {
      return [this.value.max_atmosphering_speed];
    },
    crew() {
      return [this.value.crew];
    },
    passengers() {
      return [this.value.passengers];
    },
    cost() {
      return [this.value.cost_in_credits];
    },
    drawerWidth() {
      return this.$q.screen.width <= 500 ? this.$q.screen.width - 25 : 500;
    },
  },
  methods: {
    upperFirtsLetter(string) {
      if (!string) return '';
      return string[0].toUpperCase() + string.substring(1);
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
