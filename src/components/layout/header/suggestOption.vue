<template>
    <div v-for="item in option" :key="item.id" class="text-xs flex items-center py-1.5 whitespace-nowrap">
        <span class="text-emerald-500 whitespace-nowrap">
            <slot name="left" v-bind="item"></slot>
        </span>

        <slot name="right" v-bind="item"></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{ option: any[] }>()
</script>