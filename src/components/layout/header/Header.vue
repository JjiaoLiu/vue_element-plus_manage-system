<template>
    <div class="flex items-center h-full bg-gray-50">
        <div class="inline-flex items-center justify-end bg-gray-100 h-full" style="width: 200px;">
            <IconPark @click="goPrevPage" :icon="Left" :size="iconParKProps.size"
                :stroke-width="iconParKProps.strokeWidth"
                :class="['p-2 cursor-pointer hover:text-emerald-400',prevCanUse ? 'text-gray-600':' text-gray-400']">
            </IconPark>
            <IconPark @click="goNextPage" :icon="Right" :size="iconParKProps.size"
                :stroke-width="iconParKProps.strokeWidth"
                :class="['p-2 cursor-pointer hover:text-emerald-400', nextCanUse ? 'text-gray-600' : ' text-gray-400']">
            </IconPark>
        </div>
        <div class="flex items-center">
            <div class="inline-flex flex-1 items-center">
                <div v-for="topMenu in topMenus" :key="topMenu.key" @click="menuClick(topMenu)"
                    :class="['text-sm text-gray-600 py-2 px-4 cursor-pointer hover:text-gray-400 whitespace-nowrap', currentKey == topMenu.key ? 'text-gray-800 font-bold hover:text-gray-800' : '']">
                    {{ topMenu.label }}
                </div>
            </div>
            <SearchPop />
        </div>
    </div>
</template>

<script setup lang="ts">
import IconPark from '@/components/common/IconPark.vue'
import { Left, Right } from '@icon-park/vue-next'
import { useMenu } from '@/components/layout/menu/useMenu'
import SearchPop from './SearchPop.vue'
const router = useRouter();
const { topMenus, menuClick, currentKey } = useMenu()
const iconParKProps = {
    strokeWidth: 2,
    size: 22
}
const prevCanUse = ref(false)
const nextCanUse = ref(false)
function goPrevPage() {
    if (History.length === 0) return
    router.back()
    prevCanUse.value = !!History.length
}
function goNextPage() {
    router.forward()
}
</script>
