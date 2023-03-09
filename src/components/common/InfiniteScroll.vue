<template>
  <div :ref="(el) => scroll = el" :style="{ 'height': height, 'overflow-y': 'auto' }" @scroll="handleScroll">
    <div :style="{ 'height': `${itemHeight * diff}px`, 'position': 'relative' }">
      <div :style="{ 'position': 'absolute', 'top': `${scrollTop}px` }">
        <div v-for="(item) in showList" :key="item.key" :style="{ 'height': `${itemHeight}px` }">
          <slot :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

let props = defineProps<{ lists: any, itemHeight: number, height: string }>()

let scrollTop = ref(0)
let startIndex = ref(0)
let scroll = ref<any>()
let contentHeight = ref(50)
let diff = ref(0)
let showList = computed(() => {
  return props.lists.slice(
    startIndex.value,
    startIndex.value + diff.value
  );
})
const handleScroll = (e: Event) => {
  scrollTop.value = scroll.value.scrollTop;
  startIndex.value = Math.floor(scrollTop.value / props.itemHeight);
}
onMounted(() => {
  contentHeight.value = scroll.value.clientHeight;
  diff.value = Math.ceil(contentHeight.value / props.itemHeight);
  startIndex.value = Math.floor(scrollTop.value / props.itemHeight);
})

</script>