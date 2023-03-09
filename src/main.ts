import {createApp} from "vue";
import "./style.scss";
import "@/utils/extend";
import App from "./App.vue";
import {router} from "./router";
import {createPinia} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App).use(pinia).use(router);

app.directive("permission", (el, binding) => {
  const permission = binding.value;
  let routeMeta = router.currentRoute.value.meta;
  if (routeMeta[permission]) {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
});
app.mount("#app");
