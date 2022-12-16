<template>
    <el-carousel height="150px" direction="horizontal" :initial-index="0" :autoplay="false" :interval="3000"
        :loop="true" trigger="hover" indicator-position="outside" arrow="hover">
        <el-carousel-item v-for="(item, index) in banners" :key="index">
            <img :src="item.imageUrl" />
        </el-carousel-item>
    </el-carousel>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common';
import { storeToRefs } from 'pinia';
const commonStore = useCommonStore()
const { getBanners } = commonStore;
const { banners } = storeToRefs(commonStore)
onMounted(async () => {
    await getBanners()
})
</script>