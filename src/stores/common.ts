import { Banner } from "./../models/banner";
import { defineStore } from "pinia";
import { useBanner } from "@/utils/api";

export const useCommonStore = defineStore(
  "common",
  () => {
    const banners = ref<Banner[]>([]);
    const getBanners = async () => {
      if (banners.value.length) return;
      banners.value = await useBanner();
    };
    const setBanners = (payload: Banner[]) => {
      banners.value = payload;
    };
    return {
      banners,
      getBanners,
      setBanners,
    };
  },
  {
    persist: {
      paths: ["banners"],
    },
  }
);
