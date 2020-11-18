<template>
  <q-card-section class="items-center">
    <div class="info-title">{{ title }}</div>
    <div class="info-data" v-for="(item, index) in values" :key="index">{{ item }}</div>
  </q-card-section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="sass" scoped>
.info-title
  font-weight: bold
  font-size: 14px
.info-data
  padding-left: 10px
</style>
