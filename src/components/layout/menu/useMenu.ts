import {useRoute, useRouter} from "vue-router";
import {IMenuItem, IMenu} from "@/models/menu";
export const useMenu = (sideMenus: IMenu[]) => {
  const route = useRoute();
  const router = useRouter();
  const currentKey = ref(route.name);
  watch(
    () => route.name,
    (name) => {
      currentKey.value = name;
    }
  );
  const menuClick = (menu: IMenuItem) => {
    router.push({name: menu.key});
  };
  return {
    sideMenus,
    currentKey,
    menuClick,
  };
};
