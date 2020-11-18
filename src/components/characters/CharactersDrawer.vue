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
          <sw-item title="Gender:" :values="gender" />
          <sw-item title="Birth year:" :values="birth_year" />
          <sw-item title="Height:" :values="height" />
          <sw-item title="Mass:" :values="mass" />
          <sw-item title="Hair Color:" :values="hair_color" />
          <sw-item title="Skin Color:" :values="skin_color" />
          <sw-item title="Eye Color:" :values="eye_color" />
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
      return this.value.name;
    },
    gender() {
      return [this.upperFirtsLetter(this.value.gender)];
    },
    birth_year() {
      return [this.value.birth_year];
    },
    height() {
      return [`${this.value.height / 100} meters`];
    },
    mass() {
      return [`${this.value.mass} Kg`];
    },
    hair_color() {
      return [this.upperFirtsLetter(this.value.hair_color)];
    },
    skin_color() {
      return [this.upperFirtsLetter(this.value.skin_color)];
    },
    eye_color() {
      return [this.upperFirtsLetter(this.value.eye_color)];
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
