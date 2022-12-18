import { UserProfile } from "./../models/user";
import { useLogin, useLoginStatus } from "@/utils/api";
import { defineStore } from "pinia";
export const useUserStore = defineStore("user", () => {
  const token = ref("");
  const cookie = ref("");
  const showLogin = ref(false);
  let profile: UserProfile = reactive({} as UserProfile);
  const isLogin = computed(() => {
    return profile?.userId > 0;
  });
  const login = async (phone: string, password: string) => {
    let res = await useLogin(phone, password);
    if (res.code == 200) {
      token.value = res.token;
      cookie.value = res.cookie;
      document.cookie = res.cookie;
      localStorage.setItem("USER-TOKEN", token.value);
      localStorage.setItem("USER-COOKIE", cookie.value);
    }
  };
  const checkLogin = async () => {
    let { data } = await useLoginStatus();

    if (data.code == 200) {
      showLogin.value = false;
      profile = Object.assign(profile, data.account);
    }
  };
  return {
    profile,
    isLogin,
    showLogin,
    login,
    checkLogin,
  };
});
