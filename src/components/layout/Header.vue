<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            <IconParkVue :icon="Left" :size="iconParKProps.size" :stroke-width="iconParKProps.strokeWidth"
                class="p-2 cursor-pointer hover:text-emerald-400"></IconParkVue>
            <IconParkVue :icon="Right" :size="iconParKProps.size" :stroke-width="iconParKProps.strokeWidth"
                class="p-2 cursor-pointer hover:text-emerald-400"></IconParkVue>

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
import IconParkVue from '../IconPark.vue';
import UserInfoVue from "./header/UserInfo.vue"
import { Left, Right, EmailDown, Platte, HamburgerButton, EmailBlock } from '@icon-park/vue-next'
const iconParKProps = {
    strokeWidth: 2,
    size: 22
}
</script>

<style scoped>

</style>