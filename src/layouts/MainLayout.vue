<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-8 text-white">
    <sw-header />
    <sw-drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SWHeader from '../components/SWHeader';
import SWDrawer from '../components/SWDrawer';

export default {
  components: { 'sw-header': SWHeader, 'sw-drawer': SWDrawer },
};
</script>
