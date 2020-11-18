<template>
  <div>
    <div class="title">Starships</div>
    <q-separator class="separator" dark />
    <div class="count">{{ count }} Results</div>
    <starships-table @selected-row="setStarships" />
    <starships-drawer v-model="startship" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import StarshipsTable from './StarshipsTable';
import StarshipsDrawer from './StarshipsDrawer';

const { mapGetters } = createNamespacedHelpers('starships');
export default {
  components: { StarshipsTable, StarshipsDrawer },
  data() {
    return { drawerWidth: 500, drawerState: false, startship: null };
  },
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    setStarships(startship) {
      this.startship = startship;
    },
  },
};
</script>
<style lang="sass" scoped>
.title
  font-size: 42px
  padding: 0 10px

.count
  padding: 10px 10px
  color: $grey-5
</style>
