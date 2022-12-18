/** @format */

import {Song} from "@/models/song";
import {SongUrl} from "@/models/song_url";
import {useSongUrl, useDetail} from "@/utils/api";
import {defineStore, storeToRefs} from "pinia";
export const usePlayerStore = defineStore("player", {
  state: () => {
    return {
      timer: null,
      audio: new Audio(),
      loopType: 0, //循环模式 0 单曲循环 1 列表循环 2随机播放
      volume: localStorage.getItem("volume")?.toInt() || 60, //音量
      playList: [] as Song[], //播放列表,
      showPlayList: false,
      currentId: 0,
      songUrl: {} as SongUrl,
      song: {} as Song,
      isPlaying: false, //是否播放中
      isPause: false, //是否暂停
      sliderInput: false, //是否正在拖动进度条
      ended: false, //是否播放结束
      muted: false, //是否静音
      currentTime: 0, //当前播放时间
      duration: 0, //总播放时长
    };
  },
  getters: {
    playListCount(state) {
      return state.playList.length;
    },
    thisIndex(state) {
      return state.playList.findIndex((play) => play.id == state.songUrl.id);
    },
    nextSong(state): Song {
      if (this.thisIndex == this.playListCount - 1)
        return state.playList.first();
      return state.playList[this.thisIndex + 1];
    },
    prevSong(state): Song {
      if (this.thisIndex == 0) return state.playList.last();
      return state.playList[this.thisIndex - 1];
    },
  },
  actions: {
    init() {
      this.audio.volume = this.volume / 100;
    },
    //添加歌单到播放列表
    pushPlayList(replace: boolean, list: Song[]) {
      if (replace) {
        this.playList = list;
        return;
      }
      this.playList = Array.from(new Set([...this.playList, ...list]));
    },
    //清除播放列表
    clearPlayList() {
      this.$reset();
      this.audio.load(); //load() 方法重置媒体成初始化状态
    },
    //播放歌曲
    async play(id: number) {
      if (id == this.songUrl.id) return;
      const data = await useSongUrl(id);

      this.audio.src = data.url;
      this.audio.play().then((_) => {
        this.songUrl = data;
        this.isPlaying = true;
        this.songDetail(this.songUrl.id);
      });
    },
    //从头播放歌单
    async playReset() {
      if (!this.playList.length) return;
      let id = this.playList[0].id;
      console.log(id);
      const data = await useSongUrl(id);

      this.audio.src = data.url;
      this.audio.play().then((_) => {
        this.songUrl = data;
        this.isPlaying = true;
        this.songDetail(this.songUrl.id);
      });
    },
    async songDetail(id: number) {
      this.song = await useDetail(id);
      this.pushPlayList(false, [this.song]);
    },
    interval() {
      if (this.isPlaying && !this.sliderInput) {
        this.currentTime = parseInt(this.audio.currentTime.toString());
        this.duration = parseInt(this.audio.duration.toString());
        this.ended = this.audio.ended;
      }
    },
    playEnd() {
      console.log("播放结束");
    },
    //上一曲
    prev() {},
  },
});
export const userPlayerInit = () => {
  let timer: NodeJS.Timer;
  const playStore = usePlayerStore();
  const {init, interval, playEnd} = playStore;
  const {ended} = storeToRefs(playStore);
  watch(ended, () => {
    if (!ended) return;
    playEnd();
  });
  onMounted(() => {
    init();
    timer = setInterval(interval, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
};
