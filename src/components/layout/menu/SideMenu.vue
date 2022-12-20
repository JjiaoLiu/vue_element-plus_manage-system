<template>
    <div v-for="menu in sideMenus" :key="menu.key" class="py-2.5">
        <template v-if="menu.label">
            <p class="px-5 pb-2 text-xs ">{{ menu.label }}</p>
        </template>
        <ul class="text-sm">
            <li v-for="m in menu.menu" :key="m.key"
                :class="['flex items-center justify-between py-2 pl-5 pr-3 cursor-pointer bg-transparent ', currentKey == m.key ? '' : '']"
                @click="menuClick(m)">
                <div class=" inline-flex items-center">
                    <IconPark :stroke-width="2" :size="18" class="mr-1.5" :icon="m.icon" />
                    <span class="text-sm"> {{ m.label }} </span>
                </div>
                <IconPark :icon="m.rightIcon" size="18" :stroke-width="2" />
            </li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import IconPark from '@/components/common/IconPark.vue'
import { useMenu } from './useMenu';
const menu = useMenu();
const { sideMenus, menuClick, currentKey } = menu
</script>