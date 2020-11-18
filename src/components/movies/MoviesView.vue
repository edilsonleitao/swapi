<template>
  <div>
    <div class="title">Movies</div>
    <q-separator class="separator" dark />
    <div class="count">{{ count }} Results</div>
    <movies-table @selected-row="setMovie" />
    <movies-drawer v-model="movie" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import MoviesTable from './MoviesTable';
import MoviesDrawer from './MoviesDrawer';

const { mapGetters } = createNamespacedHelpers('movies');
export default {
  components: { MoviesTable, MoviesDrawer },
  data() {
    return { drawerWidth: 500, drawerState: false, movie: null };
  },
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    setMovie(movie) {
      this.movie = movie;
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
