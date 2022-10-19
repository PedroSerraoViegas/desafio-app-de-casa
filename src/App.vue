<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <section id="display"><league-list></league-list></section>
  <league-standings></league-standings>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LeagueList from "./components/LeagueList.vue";
import LeagueStandings from "./components/LeagueStandings.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    LeagueList,
    LeagueStandings,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#display {
  display: flex;
  justify-content: center;
}
</style>
