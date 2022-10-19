<template>
  <p v-if="isLoading">Loading...</p>
  <div id="container">
    <ul>
      <league-team
        v-for="team in standings"
        :key="team.id"
        :name="team.name"
      ></league-team>
    </ul>
  </div>
</template>

<script>
import LeagueTeam from "./LeagueTeam.vue";

export default {
  components: { LeagueTeam },
  data() {
    return {
      standings: [],
      isLoading: false,
    };
  },
  methods: {
    loadStandings() {
      this.isLoading = true;
      fetch(
        "http://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2020&sort=asc"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          console.log(data.data.standings[0].team.id);
          for (let i = 0; i < data.data.standings.length; i++) {
            this.standings.push({
              id: data.data.standings[i].team.id,
              name: data.data.standings[i].team.displayName,
            });
          }
        });
    },
  },
  mounted() {
    this.loadStandings();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  width: inherit;
}

li:nth-child(-n + 4) {
  background-color: rgba(149, 212, 53, 0.445);
}

li:nth-child(n + 17) {
  background-color: rgba(255, 47, 47, 0.445);
}
#container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
