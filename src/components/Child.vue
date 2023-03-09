<template>
  <div>
    <p> -------child.vue------</p>
    {{ propsFromParant }}
    <el-button type="primary" size="default" @click="emits('toparent', '我是来自child组件emit事件的数据')">点击我向parent传递数据</el-button>
    <el-button type="primary" size="default" @click="mitt.emit('tobar', '我是来自child组件mitt事件的数据')">点击我向bar传递数据</el-button>
    <p>{{ attrs.attrs1 }}</p>
    <p> -------child.vue------</p>
  </div>
</template>

<script setup lang="ts">
import mitt from '@/utils/mitt';
defineProps<{ propsFromParant: string }>()
const emits = defineEmits<{ (e: 'toparent', data: string): void }>()
const exposeStr = ref<string>('我是父组件通过childRef获取的child组件数据')
defineExpose({ exposeStr })
const attrs = useAttrs()
</script>
