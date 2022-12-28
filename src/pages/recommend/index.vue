<template>
    <div>
        <el-carousel :interval="3000" type="card" :height="bannerHeight + 'px'">
            <el-carousel-item v-for="(item, index) in banners" :key="index" class="rounded-lg">
                <img v-element-size="onResize" :src="item.imageUrl" alt="" />
                <el-tag type="danger" effect="dark" class=" absolute right-0 bottom-0">
                    {{ item.typeTitle }}
                </el-tag>
            </el-carousel-item>
        </el-carousel>
        <el-pagination :total='100' background>
        </el-pagination>
        <div class=" grid grid-cols-5 gap-4">
            <div v-for="item in personalized" :key="item.id">
                <div class="group relative">
                    <img :src="item.picUrl" class="rounded-md overflow-hidden w-full" alt="" srcset="" />
                    <div class="text-sm absolute right-2 top-1 flex items-center">
                        <IconPark :icon="PlayOne" />
                        {{ useNumberFormat(item.playCount) }}
                    </div>
                    <div @click.stop="getPlayListDetail(item.id)"
                        class="opacity-0 group-hover:opacity-100 absolute bottom-1 right-2">
                        <IconPark size="24" theme="multi-color"
                            :fill="['#ffffff', '#ffffff', 'var(--el-color-primary)', 'var(--el-color-primary)']"
                            :icon="Play" />
                    </div>
                </div>
                <p :style="{ '--el-primary-color': 'var(--el-text-color-regular)' }" class="text-sm pt-2 ">{{ item.name
                }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import { storeToRefs } from 'pinia';
import { vElementSize } from '@vueuse/components'
import { usePersonalized, usePlayListDetail } from '@/utils/api';
import { Personalized } from '@/models/personalized';
import IconPark from '@/components/common/IconPark.vue'
import { PlayOne, Play } from '@icon-park/vue-next';
import { useNumberFormat } from '@/utils/number';
import { usePlayerStore } from '@/stores/player';
const commonStore = useCommonStore();
const { pushPlayList, playReset } = usePlayerStore();
const { banners } = storeToRefs(commonStore)
const { getBanners } = commonStore
const bannerHeight = ref(200)
const personalized = ref<Personalized[]>([])
onMounted(async () => {
    getBanners();
    personalized.value = await usePersonalized()
})
function onResize({ width, height }: { width: number; height: number }) {
    bannerHeight.value = height
}

async function getPlayListDetail(id: number) {
    const playlist = await usePlayListDetail(id)
    pushPlayList(false, playlist.tracks)
    playReset()
}
</script>

<style scoped>
:deep(.el-carousel__button) {
    border-radius: var(--el-border-radius-base);
}
 p {
    color:  var(--el-primary-color);
 }
</style>