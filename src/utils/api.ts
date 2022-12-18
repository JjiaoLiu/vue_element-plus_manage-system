/** @format */

import {SongUrl} from "./../models/song_url";
import {SearchHotDetail, SearchSuggest} from "./../models/search";
import {Banner} from "./../models/banner";
import {UserProfile} from "@/models/user";
import http from "./http";
import {Song} from "@/models/song";
import {Personalized} from "@/models/personalized";
import { PlayListDetail } from "@/models/playlist";

export async function useLogin(phone: string, password: string) {
  return await http.get<{code: number; cookie: string; token: string}>(
    "/login/cellphone",
    {
      phone: phone,
      password: password,
    }
  );
}
export async function useLoginStatus() {
  return await http.get<{
    data: {code: number; profile: UserProfile; account?: UserProfile};
  }>("/login/status");
}

export async function useBanner() {
  const {banners} = await http.get<{banners: Banner[]}>("/banner");
  return banners;
}

export async function useSearchHotDetail(keywords: string) {
  return http.get<{code: number; data: SearchHotDetail[]}>(
    "/search/hot/detail",
    {keywords: keywords}
  );
}

export async function useSearchSuggest(keywords: string) {
  return http.get<{code: number; result: SearchSuggest[]}>("/search/suggest", {
    keywords: keywords,
  });
}
export async function useSongUrl(id: number) {
  const {data} = await http.get<{data: SongUrl[]}>("/song/url", {id: id});
  console.log(data);

  return data.first();
}
export async function useDetail(id: number) {
  const {songs} = await http.get<{songs: Song[]}>("/song/detail", {ids: id});
  return songs.first();
}

export async function usePersonalized() {
  const {result} = await http.get<{result: Personalized[]}>("/personalized");
  return result;
}

export async function usePlayListDetail(id: number, s: number = 8) {
  const {playlist} = await http.get<{ playlist: PlayListDetail }>('/playlist/detail', {id: id, s: s})
  return playlist
}