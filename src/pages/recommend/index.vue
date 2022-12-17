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
        <el-button type="primary" size="small">111</el-button>
    </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import { storeToRefs } from 'pinia';
import { vElementSize } from '@vueuse/components'

const commonStore = useCommonStore();
const { banners } = storeToRefs(commonStore)
const { getBanners } = commonStore
const bannerHeight = ref(200)

onMounted(async () => {
    await getBanners();
})
function onResize({ width, height }: { width: number; height: number }) {
    bannerHeight.value = height
}
</script>

<style scoped>
:deep(.el-carousel__button) {
    border-radius: var(--el-border-radius-base);
}
</style>