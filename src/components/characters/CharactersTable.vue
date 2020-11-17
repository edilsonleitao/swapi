<template>
  <sw-table
    :data="results"
    :columns="columns"
    rowKey="name"
    @selected-page="setPage"
    :loading="loading"
    :page="page"
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
        },
        {
          label: 'Gender',
          name: 'gender',
          field: 'gender',
          align: 'left',
        },
        {
          label: 'Birth Year',
          name: 'birth_year',
          field: 'birth_year',
          align: 'left',
        },
        {
          label: 'Height',
          name: 'height',
          field: 'height',
          align: 'center',
          format: (value) => `${value / 100} m`,
        },
        {
          label: 'Mass (Kg)',
          name: 'mass',
          field: 'mass',
          align: 'right',
        },
        {
          label: 'Films',
          name: 'films',
          field: 'films',
          align: 'right',
          format: (value) => value && value.length,
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
      ],
    };
  },
  computed: {
    ...mapGetters(['loading', 'results', 'page']),
  },
  methods: {
    ...mapActions(['fetch', 'setPage']),
  },
  created() {
    this.fetch();
  },
};
</script>
