import { Earth, Music, Radio, Video } from "@icon-park/vue-next";
import { type Icon } from "@icon-park/vue-next/lib/runtime";
export interface IMenuItem {
  label: string;
  icon: Icon;
  key: string;
}
export interface IMenu {
  label: string;
  key: string;
  menu: IMenuItem[];
}

export const useMenu = () => {
  const menus: IMenu[] = [
    {
      label: "在线音乐",
      key: "onlineMusic",
      menu: [
        {
          label: "推荐",
          icon: Earth,
          key: "discover",
        },
        {
          label: "音乐馆",
          icon: Music,
          key: "music",
        },
        {
          label: "视频",
          icon: Video,
          key: "video",
        },
        {
          label: "电台",
          icon: Radio,
          key: "outline",
        },
      ],
    },
  ];
  const route = useRoute();
  const router = useRouter();
  const currentKey = ref(route.meta.menu);
  watch(
    () => route.name,
    (name) => {
      currentKey.value = name;
    }
  );
  const menuClick = (menu: IMenuItem) => {
    router.push({ name: menu.key });
  };
  return {
    menus,
    currentKey,
    menuClick,
  };
};
