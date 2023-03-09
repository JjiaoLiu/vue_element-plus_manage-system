import {IMenuItem} from "@/models/menu";
import {useMenuStore} from "./stores/menu";
import {createWebHistory, createRouter, RouteMeta} from "vue-router";
import routes from "~pages";
import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean;
    // 每个路由都必须声明
    requiresAuth: boolean;
  }
}
export const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export const handleRouterMeta = (sideMenusFlat: IMenuItem[]) => {
  let routesFlat = router.getRoutes();
  sideMenusFlat.forEach((curRoute) => {
    let match = routesFlat.find((i) => i.name == curRoute.key);
    if (match) {
      match.meta = curRoute.meta as RouteMeta;
    }
  });
};
let isFresh = true; //刷新页面重新处理路由
router.beforeEach(async (to, _, next) => {
  if (to.path === "/login") {
    next();
    return;
  }
  const {sideMenus, getMenus, sideMenusFlat} = useMenuStore();
  if (isFresh && sideMenus.length) {
    isFresh = false;
    handleRouterMeta(sideMenusFlat);
    next({...to});
    return;
  }
  if (sideMenus.length === 0) {
    isFresh = false;
    await getMenus();
    handleRouterMeta(sideMenusFlat);
    next({...to});
  } else {
    isFresh = false;
    handleRouterMeta(sideMenusFlat);
    next();
  }
});
