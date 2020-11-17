<template>
  <q-tab :name="name" no-caps>
    <div class="container flex items-center">
      <q-icon class="icon" :name="icon" />
      <div class="text">{{ name }}</div>
    </div>
  </q-tab>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="sass" scoped>
.container
  width: 150px

  .icon
    padding-right: 20px
    font-size: 30px

  .text
    font-weight: bold
</style>
