<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <section id="display">
    <ul>
      <league-item
        v-for="league in leagues"
        :key="league.id"
        :name="league.name"
        :abbreviation="league.abbreviation"
        :logo-source="league.logoSource"
      ></league-item>
    </ul>
  </section>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      leagues: [
        {
          id: "champ",
          name: "Champions League",
          abbreviation: "UEFA",
          logoSource:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/UEFA_Champions_League.svg/800px-UEFA_Champions_League.svg.png",
        },
        {
          id: "prem",
          name: "Premier League",
          abbreviation: "PREMIER",
          logoSource:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/270px-Premier_League_Logo.svg.png",
        },
        {
          id: "lib",
          name: "CONMEBOL - Libertadores",
          abbreviation: "LIB",
          logoSource:
            "https://upload.wikimedia.org/wikipedia/pt/thumb/9/95/Conmebol_Libertadores_logo.svg/280px-Conmebol_Libertadores_logo.svg.png",
        },
      ],
    };
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
ul {
  list-style: none;
}
</style>
