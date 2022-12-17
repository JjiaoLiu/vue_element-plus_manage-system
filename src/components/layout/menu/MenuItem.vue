<template>
    <div>
        <p class="text-xs">
            <slot name="menuLabel"></slot>
        </p>
        <ul>
            <li v-for="menuItem in data" class="flex">
                <slot name="menuItemIcon" :menuItemIcon="menuItem.icon"></slot>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { IMenu, IMenuItem } from './useMenu';
defineProps<{ data: IMenuItem[] }>()
</script>

<style scoped>

</style>