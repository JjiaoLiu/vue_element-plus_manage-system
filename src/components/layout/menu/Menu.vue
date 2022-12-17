<template>
    <div v-for="menu in menus" :key="menu.key" class=" p-5">
        <p class="px-5 pb-3 text-xs">{{ menu.label }}</p>
        <ul v-for="m in menu.menu" :key="m.key" class=" text-sm">
            <li :class="['flex items-center py-1 my-1 px-5 cursor-pointer bg-transparent rounded-md hover:bg-emerald-500 hover:text-white', currentKey == m.key ? 'bg-emerald-500 text-white' : '']"
                @click="menuClick(m)">
                <IconPark class="mr-1.5" :icon="m.icon" />
                <span class=" "> {{ m.label }} </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import IconPark from '@/components/IconPark.vue';
import { useMenu } from './useMenu';

const menu = useMenu();
const { menus, menuClick, currentKey } = menu
</script>

<style scoped>

</style>