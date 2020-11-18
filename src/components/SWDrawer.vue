<template>
  <q-drawer
    :value="leftDrawerState"
    @input="closeDrawer"
    content-class="bg-grey-9"
    elevated
    ref="mainDrawer"
  >
    <q-list>
      <q-item-label header>
        <div class="title flex flex-center">S W A P I</div>
      </q-item-label>
      <q-item-label>
        <q-tabs
          :value="menuOption"
          @input="handleSelectOption"
          vertical
          active-bg-color="grey-8"
          indicator-color="grey-8"
        >
          <menu-item
            v-for="({ name, icon }, index) in menuItems"
            :key="index"
            :name="name"
            :icon="icon"
          />
        </q-tabs>
      </q-item-label>
    </q-list>
  </q-drawer>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import MenuItem from '../components/MenuItem';

const { mapGetters, mapMutations } = createNamespacedHelpers('menu');
export default {
  components: { MenuItem },
  data() {
    return {
      menuItems: [
        { name: 'Home', icon: 'home' },
        { name: 'Characters', icon: 'person' },
        { name: 'Species', icon: 'adb' },
        { name: 'Planets', icon: 'flare' },
        { name: 'Starships', icon: 'airplanemode_active' },
        { name: 'Vehicles', icon: 'airport_shuttle' },
        { name: 'Movies', icon: 'theaters' },
      ],
    };
  },
  computed: {
    ...mapGetters(['leftDrawerState', 'menuOption']),
  },
  methods: {
    ...mapMutations(['toggleLeftDrawerState', 'setMenuOption']),
    closeDrawer() {
      if (this.$refs.mainDrawer.value) {
        this.toggleLeftDrawerState();
      }
    },
    handleSelectOption(value) {
      if (this.$q.screen.sm || this.$q.screen.xs) this.toggleLeftDrawerState();
      this.setMenuOption(value);
    },
  },
  mounted() {
    if (this.$q.screen.sm || this.$q.screen.xs) this.toggleLeftDrawerState();
  },
};
</script>
<style lang="sass" scoped>
.title
  font-size: 20px
  color: #fff
</style>
