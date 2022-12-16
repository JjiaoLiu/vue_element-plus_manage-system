<template>
    <el-popover :width="300" :visible="visible">
        <template #reference>
            <el-input v-model="searchKeyword" @blur="visible = false" @focus="visible = true" placeholder="搜索音乐，MV，歌单"
                :prefix-icon="Search" clearable>
            </el-input>
        </template>
        <template #default>
            <el-scrollbar max-height="50vh" class="overflow-hidden" v-loading="loading">
                <div v-if="showHot && searchHotDetail.length">
                    <p class="py-1.5">热门搜索</p>
                    <p v-for="(item, index) in searchHotDetail" :key="index" class="flex justify-between py-1.5">
                        <span class="text-xs">{{ `${index + 1}.${item.searchWord}` }} </span>
                        <span class="text-xs text-red-300">{{ useNumberFormat(item.score) }}</span>
                    </p>
                </div>
                <div v-else>
                    <p class="py-1.5">单曲</p>
                    <div v-for="item in suggest.songs" :key="item.id"
                        class="text-xs flex items-center py-1.5 px-1 whitespace-nowrap hover:bg-slate-300">
                        <span class="text-emerald-500 whitespace-nowrap">{{ item.name }}
                        </span> &nbsp; - &nbsp;
                        <p class="flex-auto overflow-hidden text-ellipsis">
                            <template v-for="artist in item.artists" :key="artist.id">
                                {{ artist.name }}
                            </template>
                        </p>
                    </div>
                    <p class="py-1.5">歌手</p>
                    <div v-for="item in suggest.artists" :key="item.id"
                        class="flex items-center py-1.5 px-1  whitespace-nowrap hover:bg-slate-300">
                        <el-avatar class="mr-2 flex-shrink-0" icon="el-icon-user-solid" size="small" shape="circle"
                            :src="item.img1v1Url" fit="fill"></el-avatar>
                        <span class="text-xs">{{ item.name }} </span>
                    </div>
                    <p class="py-1.5">专辑</p>
                    <div v-for="item in suggest.albums" :key="item.id"
                        class="flex items-center py-1.5 px-1  whitespace-nowrap hover:bg-slate-300">
                        <span class="text-xs text-emerald-500">{{ item.name }} </span> &nbsp; - &nbsp;
                        <span class="text-xs text-ellipsis overflow-hidden"> {{ item.artist.name }}</span>
                    </div>
                    <p class="py-1.5">歌单</p>
                    <div v-for="item in suggest.playlists" :key="item.id"
                        class="flex items-center py-1.5 px-1 whitespace-nowrap hover:bg-slate-300">
                        <el-avatar class="mr-2 flex-shrink-0" icon="el-icon-user-solid" size="small" shape="circle"
                            :src="item.coverImgUrl" fit="fill"></el-avatar>
                        <span class="text-xs text-emerald-500 text-ellipsis overflow-hidden">{{ item.name }} </span>
                    </div>
                </div>
            </el-scrollbar>
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import type { SearchHotDetail, SearchSuggest } from "@/models/search";
import { Search } from "@icon-park/vue-next";
import { debounce } from 'lodash'
import { useNumberFormat } from "@/utils/number";
import { useSearchHotDetail, useSearchSuggest } from "@/utils/api";
const searchKeyword = ref('')
const visible = ref(false)
const showHot = ref(false)
const loading = ref(false)

let suggest = reactive<SearchSuggest>({} as SearchSuggest)
let searchHotDetail = ref<SearchHotDetail[]>([])
watch(visible, async (n, _o) => {
    if (!n) return
    loading.value = true;
    if (searchKeyword.value) {
        let { result } = await useSearchSuggest(searchKeyword.value);
        suggest = Object.assign(suggest, result)
        showHot.value = false;
    } else {
        let { data } = await useSearchHotDetail("");
        searchHotDetail.value = data;
        showHot.value = true
    }
    loading.value = false;
})
watch(searchKeyword, debounce(async (n, _o) => {
    loading.value = true;
    if (!n) {
        let { data } = await useSearchHotDetail("");
        searchHotDetail.value = data;
        showHot.value = true
    } else {
        let { result } = await useSearchSuggest(n);
        suggest = Object.assign(suggest, result)
        showHot.value = false;
    }
    loading.value = false;
}, 500))
</script>
<style lang="postcss" scoped>
:deep(.el-input__wrapper) {
    @apply rounded-full shadow-none border-gray-300 border-solid border
}

:deep(.el-input__wrapper.is-focus) {
    @apply shadow-none border-emerald-300 border-solid border
}
</style>
