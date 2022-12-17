<template>
    <div class="flex items-center justify-between py-2">
        <div class="flex items-center">
            <IconParkVue @click="goPrevPage" :icon="Left" :size="iconParKProps.size"
                :stroke-width="iconParKProps.strokeWidth" class="p-2 cursor-pointer hover:text-emerald-400">
            </IconParkVue>
            <IconParkVue @click="goNextPage" :icon="Right" :size="iconParKProps.size"
                :stroke-width="iconParKProps.strokeWidth" class="p-2 cursor-pointer hover:text-emerald-400">
            </IconParkVue>
            <SearchPop />
        </div>
        <div class="flex items-center">
            <UserInfoVue />
            <IconParkVue :icon="EmailBlock" :size="iconParKProps.size" :stroke-width="iconParKProps.strokeWidth"
                class="p-2 cursor-pointer hover:text-emerald-400"></IconParkVue>
            <IconParkVue :icon="Platte" :size="iconParKProps.size" :stroke-width="iconParKProps.strokeWidth"
                class="p-2 cursor-pointer hover:text-emerald-400"></IconParkVue>
            <IconParkVue :icon="HamburgerButton" :size="iconParKProps.size" :stroke-width="iconParKProps.strokeWidth"
                class="p-2 cursor-pointer hover:text-emerald-400"></IconParkVue>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconParkVue from '../../IconPark.vue';
import SearchPop from "./SearchPop.vue"
import UserInfoVue from "./UserInfo.vue"
import { Left, Right, Platte, HamburgerButton, EmailBlock } from '@icon-park/vue-next'
const router = useRouter()

const iconParKProps = {
    strokeWidth: 2,
    size: 22
}
function goPrevPage() {
    if (History.length === 0) return
    router.back()
}
function goNextPage() {
    router.forward()
}
</script>