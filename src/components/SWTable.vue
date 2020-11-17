<template>
  <div class="container">
    <q-table
      :title="title"
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
    />
    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="white"
        text-color="grey-9"
        :max="pagesNumber"
        :direction-links="true"
        :boundary-links="true"
        icon-first="skip_previous"
        icon-last="skip_next"
        icon-prev="fast_rewind"
        icon-next="fast_forward"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
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
  },
  data() {
    return {
      pagination: { page: 1 },
      pagesNumber: 5,
    };
  },
};
</script>
