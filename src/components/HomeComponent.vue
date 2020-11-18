<template>
  <div>
    <q-card bordered class="home-about text-dark">
      <q-card-section class="home-title">The Star Wars Databank (Swapi)</q-card-section>
      <q-separator inline />
      <q-card-section>
        <b>The Star Wars Databank</b> is the unofficial Star Wars website's reference guide to
        elements such as <b>characters, species, planets, vehicles and starships</b> included in the
        franchise's canon films and television series.
      </q-card-section>
    </q-card>
    <q-card bordered class="home-about text-dark">
      <q-card-section class="home-title">Code Base (Github)</q-card-section>
      <q-separator inline />
      <q-card-section class="row items-center flex-center">
        <github-button
          class="gh-button"
          href="https://github.com/edilsonleitao/swapi"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="Star swapi on GitHub"
        >
          Star SWAPI
        </github-button>
        <github-button
          class="gh-button"
          href="https://github.com/edilsonleitao"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="Follow @edilsonleitao on GitHub"
        >
          Follow @edilsonleitao
        </github-button>
        <github-button
          class="gh-button"
          href="https://github.com/edilsonleitao/swapi/archive/master.zip"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="Download edilsonleitao/swapi on GitHub"
        >
          Download
        </github-button>
      </q-card-section>
    </q-card>
    <q-card bordered class="home-about text-dark col-xs-12 col-md-12 col-lg-12">
      <q-card-section class="home-title">About:</q-card-section>
      <q-separator inline />
      <q-card-section>
        <b>The Star Wars DataBank</b> use the API available on
        <a href="https://swapi.dev/" target="_blank">https://swapi.dev/</a>
        that contains all the Star Wars data you've ever wanted:
        <b>Planets, Spaceships, Vehicles, People, Films and Species</b>.
      </q-card-section>
      <q-card-section>
        Was developed with <b>Vuejs</b>, The Progressive JavaScript Framework and <b>Quasar</b>, an
        MIT licensed open-source Vue.js based framework.
      </q-card-section>
      <q-card-section>
        The project has 3 main functionalities:<br />
        <b>1. A left side menu.</b><br />
        <b>2. A table with the selected records with pagination.</b><br />
        <b>3. A right side drawer with more details about selected record.</b><br />
      </q-card-section>
      <q-card-section class="row flex-center q-gutter-md">
        <q-img
          v-for="(item, index) in imgs"
          :key="index"
          :src="item"
          spinner-color="white"
          :ratio="1"
          style="height: 480px; max-width: 220px"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import GithubButton from 'vue-github-button';

export default {
  components: {
    GithubButton,
  },
  data() {
    return {
      imgs: [
        'https://user-images.githubusercontent.com/54685795/99571529-2f55c600-29b2-11eb-9dde-eff841027ecd.png',
        'https://user-images.githubusercontent.com/54685795/99572134-f8cc7b00-29b2-11eb-92aa-d66e8d204fa7.png',
        'https://user-images.githubusercontent.com/54685795/99572291-33361800-29b3-11eb-87fe-35b47337698d.png',
      ],
    };
  },
};
</script>
<style lang="sass" scoped>
.home-about
  margin-top: 20px

.home-title
  font-size: 20px
  font-weight: bold

.gh-button
  padding-right: 10px
</style>
