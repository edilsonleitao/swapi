<template>
  <q-page class="main-page">
    <q-tab-panels
      :value="menuOption"
      animated
      swipeable
      infinite
      transition-prev="fade"
      transition-next="fade"
      class="tabs-container text-white"
    >
      <q-tab-panel name="Home">
        <sw-table title="teste" :data="data" :columns="columns" rowKey="name" />
      </q-tab-panel>
      <q-tab-panel name="innerAsd">
        <p>Asd</p>
      </q-tab-panel>
      <q-tab-panel name="innerQwe">
        <p>Qwe</p>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import SWTable from '../components/SWTable';

const { mapGetters } = createNamespacedHelpers('menu');
export default {
  components: { 'sw-table': SWTable },
  computed: {
    ...mapGetters(['menuOption']),
  },
  data() {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'calories',
          align: 'center',
          label: 'Calories',
          field: 'calories',
          sortable: true,
        },
        {
          name: 'fat',
          label: 'Fat (g)',
          field: 'fat',
          sortable: true,
        },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        {
          name: 'calcium',
          label: 'Calcium (%)',
          field: 'calcium',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          name: 'iron',
          label: 'Iron (%)',
          field: 'iron',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%',
        },
      ],
    };
  },
};
</script>
<style lang="sass" scoped>
.tabs-container
  background-color: $grey-8
</style>
