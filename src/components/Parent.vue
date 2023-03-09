<template>
  <div>
    <p>------parent.vue------</p>
    {{ toParent }}
    <child ref="childRef" attrs1="我是通过透传访问到的" props-from-parant="我是来自Parent props的数据" @toparent="getFromChild" />
    <Bar></Bar>
    <p v-if="childRef">{{ childRef.exposeStr }}</p>
    <p>------parent.vue------</p>
  </div>
</template>

<script setup lang="ts">
import Bar from "./Bar.vue";
import child from "./Child.vue";
const toParent = ref('')
const getFromChild = (data: string) => {
  toParent.value = data;
}

const childRef = ref()
onMounted(() => {
  console.log(childRef.value.exposeStr)
})
</script>
