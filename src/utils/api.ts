import {IMenu} from "@/models/menu";
import {CountItem} from "@/models/count_item";
import {ChartData} from "@/models/chart_data";
import {UserProfile} from "@/models/user";
import http from "./http";
export async function useLogin(phone: string, password: string) {
  return await http.get<{code: number; token: string}>(
    "/login/cellphone.json",
    {
      phone: phone,
      password: password,
    }
  );
}
export async function useLogOut(userId: number) {
  return await http.get<{code: number}>("/login/logOut.json", {userId});
}

export async function useLoginStatus() {
  return await http.get<{code: number; profile: UserProfile}>(
    "/login/status.json"
  );
}
export async function useCount() {
  return await http.get<{code: number; data: CountItem[]}>("/count.json");
}
export async function useCharts() {
  return await http.get<{code: number; data: ChartData}>("/charts.json");
}
export async function useSideMenu1() {
  return await http.get<{code: number; data: IMenu[]}>("/menu1.json");
}
export async function useSideMenu2() {
  return await http.get<{code: number; data: IMenu[]}>("/menu2.json");
}
