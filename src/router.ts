import {createWebHistory, createRouter, RouteRecord} from "vue-router";
import routes from "~pages";
import {START_LOCATION} from "vue-router";

export const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from) => {
  console.log("START_LOCATION", START_LOCATION);

  if (from === START_LOCATION) {
    // initial navigation
  }
});
