import {
  Broadcast,
  BroadcastRadio,
  Download,
  HeartRate,
  Heartbeat,
  History,
  Music,
  PeoplesTwo,
  PlayTwo,
  RecordDisc,
} from "@icon-park/vue-next";
export interface IMenuItem {
  label: string;
  icon?: any;
  key: string;
  rightSlotName?: any;
  rightIcon?: any;
}
export interface IMenu {
  label?: string;
  key?: string;
  menu: IMenuItem[];
  rightSlotName?: any;
}

export const useMenu = () => {
  const sideMenus: IMenu[] = [
    {
      menu: [
        {
          label: "发现音乐",
          icon: RecordDisc,
          key: "recommend",
        },
        {
          label: "播客",
          icon: Broadcast,
          key: "broadcast",
        },
        {
          label: "私人FM",
          icon: BroadcastRadio,
          key: "fm",
        },
        {
          label: "视频",
          icon: PlayTwo,
          key: "video",
        },
        {
          label: "关注",
          icon: PeoplesTwo,
          key: "attention",
        },
      ],
    },
    {
      label: "我的音乐",
      menu: [
        {
          label: "我喜欢的音乐",
          icon: HeartRate,
          key: "favorite",
          rightSlotName: "favorite",
          rightIcon: Heartbeat,
        },
        {
          label: "iTunes音乐",
          icon: Music,
          key: "itunes",
        },
        {
          label: "下载管理",
          icon: Download,
          key: "download",
        },
        {
          label: "最近播放",
          icon: History,
          key: "history",
        },
      ],
    },
  ];
  const topMenus: IMenuItem[] = [
    {
      label: "个性推荐",
      key: "recommend",
    },
    {
      label: "歌单",
      key: "songs",
    },
    {
      label: "排行榜",
      key: "record",
    },
    {
      label: "最新音乐",
      key: "latest",
    },
  ];
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
    router.push({ name: menu.key });
  };
  return {
    sideMenus,
    currentKey,
    menuClick,
    topMenus,
  };
};
