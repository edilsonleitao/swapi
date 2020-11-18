<template>
  <div class="container">
    <q-table
      :data="data"
      :columns="columns"
      :row-key="rowKey"
      :dense="$q.screen.lt.md"
      :grid="$q.screen.xs"
      card-class="bg-grey-9 text-white"
      table-class="text-white"
      table-header-class="text-white"
      flat
      hide-pagination
      :loading="loading"
      @row-click="emitSelectedItem"
      :pagination.sync="pagination"
    />
    <div class="row justify-center q-mt-md">
      <q-pagination
        :value="page"
        :max="pages"
        color="white"
        text-color="grey-9"
        :disable="disablePagination"
        @input="emitSelectedPage"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    rowKey: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    page: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pagination: {
        rowsPerPage: 10,
      },
    };
  },
  methods: {
    emitSelectedPage(pageNumber) {
      this.$emit('selected-page', pageNumber);
    },
    emitSelectedItem(evt, row) {
      this.$emit('selected-row', row);
    },
  },
  computed: {
    disablePagination() {
      return !this.data || !this.data.length;
    },
  },
};
</script>
