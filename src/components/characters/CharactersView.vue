<template>
  <div>
    <div class="title">Characters</div>
    <q-separator class="separator" dark />
    <div class="count">{{ count }} Results</div>
    <characters-table />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import CharactersTable from './CharactersTable';

const { mapGetters } = createNamespacedHelpers('characters');
export default {
  components: { CharactersTable },
  computed: {
    ...mapGetters(['count']),
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
