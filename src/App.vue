<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <section id="display"><league-list></league-list></section>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LeagueList from "./components/LeagueList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    LeagueList,
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
