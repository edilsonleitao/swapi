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

const { mapGetters, mapActions } = createNamespacedHelpers('starships');
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
          sortable: true,
        },
        {
          label: 'model',
          name: 'model',
          field: 'model',
          align: 'left',
          sortable: true,
        },
        {
          label: 'Class',
          name: 'starship_class',
          field: 'starship_class',
          align: 'left',
          sortable: true,
        },
        {
          label: 'Credits',
          name: 'cost_in_credits',
          field: 'cost_in_credits',
          align: 'center',
          sortable: true,
        },
        {
          label: 'Movies',
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
