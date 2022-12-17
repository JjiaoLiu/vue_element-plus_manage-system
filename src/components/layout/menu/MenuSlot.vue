<template>
    <slot :name="menuItem.rightSlotName" v-bind="menuItem"></slot>
</template>

<script setup lang="ts">
import { IMenuItem } from './useMenu';
defineProps<{ menuItem: IMenuItem }>()
</script>