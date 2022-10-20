<template>
  <section id="standings">
    <div>
      <q-btn color="secondary" label="All Leagues" to="/leagues" />
    </div>
    <div class="q-pa-md">
      <q-table
        table-header-class="bg-light-blue-3"
        title="Last season ranking"
        :rows="rows"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
        no-data-label="Loading"
      ></q-table>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const columns = [
      {
        name: "rank",
        required: true,
        label: "Ranking",
        align: "left",
        field: "rank",
      },
      {
        name: "team",
        required: true,
        label: "Team",
        align: "left",
        field: "team",
      },
    ];

    const rows = ref([]);

    async function fetchData(leagueId) {
      fetch(
        `http://api-football-standings.azharimm.dev/leagues/${leagueId}/standings?season=2020&sort=asc`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          for (let i = 0; i < data.data.standings.length; i++) {
            rows.value.push({
              rank: data.data.standings[i].stats[10].value,
              team: data.data.standings[i].team.displayName,
            });
          }
        });
    }
    onMounted(() => {
      const leagueId = route.params.leagueId;
      fetchData(leagueId);
    });
    return {
      columns,
      rows,
    };
  },
};
</script>

<style scoped></style>
