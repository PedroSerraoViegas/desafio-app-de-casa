<template>
  <div id="#leagueDisplay">
    <button @click="loadLeagues">Search for Leagues</button>
    <ul id="leagueList">
      <league-item
        v-for="league in leagues"
        :key="league.id"
        :name="league.name"
        :abbreviation="league.abbreviation"
        :logo-source="league.logoSource"
      ></league-item>
    </ul>
  </div>
</template>

<script>
import LeagueItem from "./LeagueItem.vue";

export default {
  components: {
    LeagueItem,
  },
  data() {
    return {
      leagues: [],
    };
  },
  methods: {
    loadLeagues() {
      fetch("http://api-football-standings.azharimm.dev/leagues")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          for (let id = 0; id < data.data.length; id++) {
            this.leagues.push({
              id: data.data[id].id,
              name: data.data[id].name,
              abbreviation: data.data[id].abbr,
              logoSource: data.data[id].logos.light,
            });
          }
        });
    },
  },
  mounted() {
    this.loadLeagues();
  },
};
</script>

<style scoped>
#leagueDisplay {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
#leagueList {
  list-style: none;
}
</style>
