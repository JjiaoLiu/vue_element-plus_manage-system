<template>
  <div>
    <p>当前状态
      {{ pageData.loading ? "页面请求中" : "" }}
      {{ pageData.error ? "请求有误" : "" }}</p>

    <el-input v-model="pageData.host" clearable>
      <template #prepend>API 地址</template>
      <template #append>
        <el-button @click="sub" :disabled="!pageData.host">提交</el-button>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useCommonStore } from './stores/common';
import { useHostStore } from './stores/host';
const { setBanners } = useCommonStore();
const { setHost } = useHostStore()

const pageData = reactive({
  host: '',
  loading: false,
  error: false
})

const baseUrl = computed(() => {
  return pageData.host.trimEnd('/')
})
const sub = async () => {
  pageData.loading = true;
  try {
    let { status, data } = await axios.get(baseUrl.value + '/banner');
    if (status === 200 && data.code === 200) {
      setBanners(data.banners)
      setHost(baseUrl.value)
    } else {
      throw Error(`${status}`);
    }
  } catch {
    pageData.error = true;
    setTimeout(() => {
      pageData.error = false
    })
  }
  pageData.loading = false
}
</script>
