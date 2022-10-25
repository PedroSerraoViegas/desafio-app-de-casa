import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import LeagueItem from "./components/LeagueItem.vue";
import LeagueList from "./components/LeagueList.vue";
import NotFound from "./components/navigation/NotFound.vue";
import LoadingSpinner from "./components/UI/LoadingSpinner.vue";
import LeagueTable from "./components/LeagueTable.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/leagues" },
    {
      path: "/leagues",
      component: LeagueList,
    },
    {
      path: "/table/:leagueId",
      component: LeagueTable,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else return { left: 0, top: 0 };
  },
});

const app = createApp(App).use(Quasar, quasarUserOptions);

app.component("league-item", LeagueItem);
app.component("league-list", LeagueList);
app.component("loading-spinner", LoadingSpinner);
app.component("lague-table", LeagueTable);

app.use(router);

app.mount("#app");
