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

const { mapGetters, mapActions } = createNamespacedHelpers('species');
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
          label: 'Classification',
          name: 'classification',
          field: 'classification',
          align: 'left',
        },
        {
          label: 'Language',
          name: 'language',
          field: 'language',
          align: 'left',
        },
        {
          label: 'Average Height',
          name: 'average_height',
          field: 'average_height',
          align: 'center',
        },
        {
          label: 'Average Lifespan',
          name: 'average_lifespan',
          field: 'average_lifespan',
          align: 'right',
        },
        {
          label: 'People',
          name: 'people',
          field: 'people',
          align: 'right',
          format: (value) => value && value.length,
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
