<template>
  <sw-table
    :data="results"
    :columns="columns"
    rowKey="name"
    @selected-page="setPage"
    @selected-row="$emit('selected-row', $event)"
    :loading="loading"
    :page="page"
    :pages="pages"
  />
</template>
<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('planets');
import SWTable from '../SWTable';

export default {
  components: { 'sw-table': SWTable },
  data() {
    return {
      columns: [
        {
          label: 'Name',
          name: 'name',
          field: 'name',
          align: 'left',
        },
        {
          label: 'Climate',
          name: 'climate',
          field: 'climate',
          align: 'left',
        },
        {
          label: 'Terrain',
          name: 'terrain',
          field: 'terrain',
          align: 'left',
        },
        {
          label: 'Population',
          name: 'population',
          field: 'population',
          align: 'right',
        },
        {
          label: 'Residents',
          name: 'residents',
          field: 'residents',
          align: 'right',
          format: (value) => value && value.length,
        },
        {
          label: 'Films',
          name: 'films',
          field: 'films',
          align: 'right',
          format: (value) => value && value.length,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['loading', 'results', 'page', 'count']),
    pages() {
      return Math.ceil(this.count / 10);
    },
  },
  methods: {
    ...mapActions(['fetch', 'setPage']),
  },
  created() {
    this.fetch();
  },
};
</script>
