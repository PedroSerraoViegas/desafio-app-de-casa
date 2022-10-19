<template>
  <section id="standings">
    <div>
      <router-link id="backButton" to="/leagues">Back to Leagues</router-link>
    </div>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="!isLoading && error">{{ error }}</p>
    <p v-else-if="!isLoading && (!standings || standings.length === 0)">
      Could not get standings data!
    </p>
    <table v-else-if="!isLoading && standings && standings.length > 0">
      <tr>
        <th>Placement</th>
        <th>Team</th>
      </tr>
      <league-row
        v-for="team in standings"
        :key="team.id"
        :name="team.name"
        :rank="team.rank"
      ></league-row>
    </table>
    <!-- <div id="container">
      <ul>
        <league-team
          v-for="team in standings"
          :key="team.id"
          :name="team.name"
        ></league-team>
      </ul>
    </div> -->
  </section>
</template>

<script>
import LeagueRow from "./LeagueRow.vue";

export default {
  components: { LeagueRow },
  data() {
    return {
      standings: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadStandings(league) {
      this.isLoading = true;
      fetch(
        `http://api-football-standings.azharimm.dev/leagues/${league}/standings?season=2020&sort=asc`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          for (let i = 0; i < data.data.standings.length; i++) {
            this.standings.push({
              id: data.data.standings[i].team.id,
              name: data.data.standings[i].team.displayName,
              rank: data.data.standings[i].stats[10].value,
            });
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.error = "Failed to fetch data - please try again later!";
        });
    },
  },
  created() {
    const leagueId = this.$route.params.leagueId;
    this.loadStandings(leagueId);
  },
  // mounted() {
  //   this.loadStandings();
  // },
};
</script>

<style scoped>
table {
  border-radius: 4px;
  border: 1px solid rgba(51, 51, 51, 0.199);
  margin-top: 1rem;
}

ul {
  list-style: none;
  width: inherit;
}

tr:nth-child(-n + 5) {
  background-color: rgba(149, 212, 53, 0.445);
}

tr:first-child {
  background-color: rgba(79, 79, 139, 0.116);
}

tr:nth-child(n + 18) {
  background-color: rgba(255, 47, 47, 0.445);
}
#container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#backButton {
  text-decoration: none;

  color: rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  padding: 4px 5px 4px 5px;
  background-color: rgb(223, 206, 183);
}

#standings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
