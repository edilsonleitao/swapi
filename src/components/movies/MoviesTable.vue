<template>
  <sw-table
    :data="results"
    :columns="columns"
    rowKey="episode_id"
    @selected-page="setPage"
    @selected-row="$emit('selected-row', $event)"
    :loading="loading"
    :page="page"
    :pages="pages"
  />
</template>
<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('movies');
import SWTable from '../SWTable';

export default {
  components: { 'sw-table': SWTable },
  data() {
    return {
      columns: [
        {
          label: 'Episode',
          name: 'episode_id',
          field: 'episode_id',
          align: 'left',
          sortable: true,
        },
        {
          label: 'Title',
          name: 'title',
          field: 'title',
          align: 'left',
          sortable: true,
        },
        {
          label: 'Director',
          name: 'director',
          field: 'director',
          align: 'left',
          sortable: true,
        },
        {
          label: 'Release Date',
          name: 'release_date',
          field: 'release_date',
          align: 'center',
          format: (value) => new Date(value).toLocaleDateString(),
          sortable: true,
        },
        {
          label: 'Characters',
          name: 'characters',
          field: 'characters',
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
          label: 'Vehicles',
          name: 'vehicles',
          field: 'vehicles',
          align: 'right',
          format: (value) => value && value.length,
        },
        {
          label: 'Planets',
          name: 'planets',
          field: 'planets',
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
