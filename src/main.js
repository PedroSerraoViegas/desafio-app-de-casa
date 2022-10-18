import { createApp } from "vue";
import App from "./App.vue";
import LeagueItem from "./components/LeagueItem.vue";
import LeagueList from "./components/LeagueList.vue";

const app = createApp(App);

app.component("league-item", LeagueItem);
app.component("league-list", LeagueList);

app.mount("#app");
