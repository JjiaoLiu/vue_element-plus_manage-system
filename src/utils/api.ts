import { Banner } from "./../models/banner";
import { UserProfile } from "@/models/user";
import http from "./http";

export async function useLogin(phone: string, password: string) {
  return await http.get<{ code: number; cookie: string; token: string }>(
    "login/cellphone",
    {
      phone: phone,
      password: password,
    }
  );
}
export async function useLoginStatus() {
  return await http.get<{ code: number; profile: UserProfile }>("login/status");
}

export async function useBanner() {
  const { banners } = await http.get<{ banners: Banner[] }>("/banner");
  return banners;
}
