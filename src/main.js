import { createApp } from "vue";
import App from "./App.vue";
import LeagueItem from "./components/LeagueItem.vue";

const app = createApp(App);

app.component("league-item", LeagueItem);

app.mount("#app");
