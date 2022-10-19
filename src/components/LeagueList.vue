<template>
  <div id="#leagueDisplay">
    <button @click="loadLeagues" id="searchButton">Search for Leagues</button>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="!isLoading && error">{{ error }}</p>
    <p v-else-if="!isLoading && (!leagues || leagues.length === 0)">
      Could not fetch Standings data!
    </p>
    <ul v-else-if="!isLoading && leagues && leagues.length > 0" id="leagueList">
      <league-item
        v-for="league in leagues"
        :id="league.id"
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
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadLeagues() {
      this.isLoading = true;
      this.error = null;
      fetch("http://api-football-standings.azharimm.dev/leagues")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          for (let id = 0; id < data.data.length; id++) {
            this.leagues.push({
              id: data.data[id].id,
              name: data.data[id].name,
              abbreviation: data.data[id].abbr,
              logoSource: data.data[id].logos.light,
            });
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.error = "Failed to fetch data - please try again later";
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
