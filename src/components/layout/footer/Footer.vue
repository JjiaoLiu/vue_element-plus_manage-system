<template>
    <div>
        footer
        <el-button type="primary" size="default" @click="playAsong">playAsong</el-button>

    </div>
</template>

<script setup lang="ts">
import { usePlayerStore, userPlayerInit } from '@/stores/player';

const id = 410801521;
const { play } = usePlayerStore()
userPlayerInit()
function playAsong() {
    play(id)
}
</script>

<style scoped>

</style>