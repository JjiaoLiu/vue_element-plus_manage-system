<template>
  <div>
    <p>-------bar.vue------</p>
    {{ mittData }}
    <p>-------bar.vue------</p>
  </div>
</template>

<script setup lang="ts">
import mitt from '@/utils/mitt';
let mittData = ref('')
mitt.on('tobar', (e) => {
  console.log(e)
  mittData.value = e as string
})
</script>
