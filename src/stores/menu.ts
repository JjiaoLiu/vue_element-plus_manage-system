import {IMenuItem} from "@/models/menu";
import {IMenu} from "@/models/menu";
import {defineStore} from "pinia";
import {useSideMenu1, useSideMenu2} from "@/utils/api";

export const useMenuStore = defineStore(
  "menu",
  () => {
    let sideMenus = ref<IMenu[]>([]);
    let sideMenusFlat = ref<IMenuItem[]>([]);

    const flatMenu = (menus: IMenu[]) => {
      menus.forEach((m: any) => {
        m.menu ? flatMenu(m.menu) : sideMenusFlat.value.push(m);
      });
    };
    const getMenus = async () => {
      const {code, data} = await useSideMenu1();
      if (code === 200) {
        sideMenus.value = data;
        flatMenu(sideMenus.value);
        return;
      }
    };

    const changeMenus = async () => {
      sideMenus.value = [];
      const {code, data} = await useSideMenu2();
      if (code === 200) {
        sideMenus.value = data;
        flatMenu(sideMenus.value);
        return;
      }
    };

    return {
      getMenus,
      sideMenus,
      sideMenusFlat,
      changeMenus,
    };
  },
  {
    persist: {
      paths: ["sideMenus", "sideMenusFlat"],
    },
  }
);
