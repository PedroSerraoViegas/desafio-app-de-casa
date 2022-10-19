import { createApp } from "vue";
import App from "./App.vue";
import LeagueItem from "./components/LeagueItem.vue";
import LeagueList from "./components/LeagueList.vue";
import LeagueStandings from "./components/LeagueStandings.vue";
import LeagueTeam from "./components/LeagueTeam.vue";

const app = createApp(App);

app.component("league-item", LeagueItem);
app.component("league-list", LeagueList);
app.component("league-standings", LeagueStandings);
app.component("league-team", LeagueTeam);

app.mount("#app");
