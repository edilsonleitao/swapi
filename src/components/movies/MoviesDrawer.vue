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
        <q-btn flat color="white" rounded icon="clear" @click="$emit('input', null)" />
      </q-card-section>
      <q-card-section>
        <div class="title">{{ title }}</div>
        <q-separator class="separator" dark />
        <q-card class="text-dark">
          <sw-item title="Episode:" :values="episode_id" />
          <sw-item title="Description:" :values="opening_crawl" />
          <sw-item title="Director:" :values="director" />
          <sw-item title="Producer:" :values="producer" />
          <sw-item title="Release Date:" :values="release_date" />
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
    title() {
      return this.value.title;
    },
    episode_id() {
      return [this.value.episode_id];
    },
    opening_crawl() {
      return [this.value.opening_crawl];
    },
    director() {
      return [this.value.director];
    },
    producer() {
      return [this.value.producer];
    },
    release_date() {
      return [new Date(this.value.release_date).toLocaleDateString()];
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
