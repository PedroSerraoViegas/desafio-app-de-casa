<template>
  <section id="standings">
    <div>
      <q-btn color="secondary" label="All Leagues" to="/leagues" />
    </div>
    <div class="q-pa-md">
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-select v-model="model" :options="options" label="Season" />
        </div>
      </div>
      <q-table
        table-header-class="bg-light-blue-4"
        title="Season ranking"
        :rows="rows"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
        no-data-label="Loading..."
        hide-pagination
        ><template v-slot:body-cell-rank="props">
          <q-td :props="props">
            <div>
              <q-badge
                :class="[
                  props.value < 5 && 'bg-green',
                  props.value > 16 && 'bg-red',
                ]"
                :label="props.value"
              ></q-badge>
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-logo="props">
          <q-td :props="props">
            <div><q-img :src="props.value"></q-img></div>
          </q-td>
        </template>
      </q-table>
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
        name: "logo",
        required: true,
        label: "Logo",
        align: "left",
        field: "logo",
      },
      {
        name: "team",
        required: true,
        label: "Team",
        align: "left",
        field: "team",
      },
      {
        name: "points",
        required: true,
        label: "Points",
        align: "center",
        field: "points",
      },
      {
        name: "gp",
        required: true,
        label: "Games Played",
        align: "center",
        field: "gp",
      },
      {
        name: "wins",
        required: true,
        label: "Wins",
        align: "center",
        field: "wins",
      },
      {
        name: "losses",
        required: true,
        label: "Losses",
        align: "center",
        field: "losses",
      },
    ];

    const rows = ref([]);
    const error = "";

    async function fetchData(leagueId) {
      fetch(
        `http://api-football-standings.azharimm.dev/leagues/${leagueId}/standings?season=2018&sort=asc`
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
              logo: data.data.standings[i].team.logos[0].href,
              points: data.data.standings[i].stats[2].value,
              gp: data.data.standings[i].stats[0].value,
              wins: data.data.standings[i].stats[6].value,
              losses: data.data.standings[i].stats[1].value,
            });
          }
        })
        .catch((error) => {
          error.value = "Failed to fetch data";
        });
    }
    onMounted(() => {
      const leagueId = route.params.leagueId;
      const season = "2021";
      fetchData(leagueId, season);
    });
    return {
      columns,
      rows,
      error,
      model: ref("2019"),
      options: ["2020", "2021", "2022"],
    };
  },
};
</script>

<style scoped></style>
