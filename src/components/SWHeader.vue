<template>
  <q-header elevated class="bg-grey-9">
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawerState" />
      <q-toolbar-title>
        The Star Wars DataBank
      </q-toolbar-title>
      <div>Swapi 1.0</div>
    </q-toolbar>
  </q-header>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('menu');
export default {
  methods: {
    ...mapMutations(['toggleLeftDrawerState']),
  },
};
</script>
