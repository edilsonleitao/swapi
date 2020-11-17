<template>
  <q-drawer :value="leftDrawerState" @input="toggleLeftDrawerState" content-class="bg-grey-9">
    <q-list>
      <q-item-label header>
        <div class="title flex flex-center">S W A P I</div>
      </q-item-label>
      <q-item-label>
        <q-tabs
          :value="menuOption"
          @input="setMenuOption"
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
      drawerWidth: 375,
      menuItems: [
        { name: 'Home', icon: 'home' },
        { name: 'Characters', icon: 'person' },
        { name: 'Species', icon: 'adb' },
        { name: 'Planets', icon: 'flare' },
        { name: 'Startships', icon: 'airplanemode_active' },
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
    onDrawerResize() {
      this.drawerWidth = this.$q.screen.width <= 375 ? this.$q.screen.width - 25 : 375;
    },
  },
  mounted() {
    this.onDrawerResize();
  },
};
</script>
<style lang="sass" scoped>
.title
  font-size: 20px
  color: #fff
</style>
