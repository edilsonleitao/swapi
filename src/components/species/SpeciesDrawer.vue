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
          <sw-item title="Language:" :values="language" />
          <sw-item title="Classification:" :values="classification" />
          <sw-item title="Designation:" :values="designation" />
          <sw-item title="Average Height:" :values="average_height" />
          <sw-item title="Skin Colors:" :values="skin_colors" />
          <sw-item title="Hair Colors:" :values="hair_colors" />
          <sw-item title="Eye Colors:" :values="eye_colors" />
          <sw-item title="Average Lifespan:" :values="average_lifespan" />
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
    language() {
      return [this.value.language];
    },
    classification() {
      return [this.upperFirtsLetter(this.value.classification)];
    },
    designation() {
      return [this.upperFirtsLetter(this.value.designation)];
    },
    average_height() {
      const { average_height: height } = this.value;
      if (height === 'unknown' || height === 'n/a') return [height];
      return [`${height / 100} meters`];
    },
    skin_colors() {
      return [this.upperFirtsLetter(this.value.skin_colors)];
    },
    hair_colors() {
      return [this.upperFirtsLetter(this.value.hair_colors)];
    },
    eye_colors() {
      return [this.upperFirtsLetter(this.value.eye_colors)];
    },
    average_lifespan() {
      const { average_lifespan: lifespan } = this.value;
      if (lifespan === 'unknown' || lifespan === 'n/a') return [lifespan];
      return [`${lifespan} years`];
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
