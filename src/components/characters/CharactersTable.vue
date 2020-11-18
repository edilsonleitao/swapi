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

const { mapGetters, mapActions } = createNamespacedHelpers('characters');
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
          label: 'Gender',
          name: 'gender',
          field: 'gender',
          align: 'left',
          format: (value) => value[0].toUpperCase() + value.substring(1),
          sortable: true,
        },
        {
          label: 'Birth Year',
          name: 'birth_year',
          field: 'birth_year',
          align: 'left',
          sortable: true,
        },
        {
          label: 'Height (m)',
          name: 'height',
          field: 'height',
          align: 'center',
          format: (value) => value / 100,
          sortable: true,
        },
        {
          label: 'Mass (Kg)',
          name: 'mass',
          field: 'mass',
          align: 'right',
          sortable: true,
        },

        {
          label: 'Vehicles',
          name: 'vehicles',
          field: 'vehicles',
          align: 'right',
          format: (value) => value && value.length,
        },
        {
          label: 'Starships',
          name: 'starships',
          field: 'starships',
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
