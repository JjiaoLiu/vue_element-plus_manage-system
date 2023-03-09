import {UserProfile} from "./../models/user";
import {useLogin, useLoginStatus, useLogOut} from "@/utils/api";
import {defineStore} from "pinia";
import {useRouter} from "vue-router";
export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const token = ref("");
  let profile: UserProfile = reactive({} as UserProfile);
  const isLogin = computed(() => {
    return profile?.id > 0;
  });
  const login = async (phone: string, password: string) => {
    let res = await useLogin(phone, password);
    if (res.code == 200) {
      token.value = res.token;
      localStorage.setItem("USER-TOKEN", token.value);
      router.replace("/");
    }
  };
  const checkLogin = async () => {
    let res = await useLoginStatus();
    if (res.code == 200) {
      profile = Object.assign(profile, res.profile);
    }
  };
  const logOut = async (userId: number) => {
    let res = await useLogOut(userId);

    if (res.code == 200) {
      profile = Object.assign({});
      token.value = "";
      localStorage.clear();
      router.replace("/login");
    }
  };
  return {
    profile,
    isLogin,
    login,
    checkLogin,
    logOut,
  };
});
