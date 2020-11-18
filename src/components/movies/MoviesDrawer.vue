<template>
  <q-drawer
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
    <q-card class="card">
      <q-card-section>
        <q-btn flat color="white" rounded icon="clear" @click="$emit('input', null)"
      /></q-card-section>
      <q-card-section>
        <div class="title">{{ title }}</div>
        <q-separator class="separator" dark />
      </q-card-section>
    </q-card>
  </q-drawer>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return { drawerWidth: 500 };
  },
  computed: {
    title() {
      return this.value && this.value.title;
    },
  },
  methods: {
    onDrawerResize() {
      this.drawerWidth = this.$q.screen.width <= 375 ? this.$q.screen.width - 25 : 500;
    },
  },
  mounted() {
    this.onDrawerResize();
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
