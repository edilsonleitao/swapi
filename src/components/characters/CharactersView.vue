<template>
  <div>
    <div class="title">Characters</div>
    <q-separator class="separator" dark />
    <div class="count">{{ count }} Results</div>
    <characters-table @selected-row="setCharacter" />
    <characters-drawer v-model="character" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import CharactersTable from './CharactersTable';
import CharactersDrawer from './CharactersDrawer';

const { mapGetters } = createNamespacedHelpers('characters');
export default {
  components: { CharactersTable, CharactersDrawer },
  data() {
    return { drawerWidth: 500, drawerState: false, character: null };
  },
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    setCharacter(character) {
      this.character = character;
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
