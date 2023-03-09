<template>
  <div class="index-index w-full overflow-hidden bg-slate-100 p-4">
    <el-space size="large" class=" w-full overflow-x-auto">
      <el-card shadow="hover" v-for="countItem in count" :key="countItem.id">
        <el-space>
          <el-avatar shape="circle" :size="80" fit="cover" :src="getImageUrl(`assets/icon_${countItem.id}.png`)" />
          <el-space direction="vertical" alignment="start">
            <p class=" font-bold text-3xl">
              <CountTo :startVal='0' :endVal='countItem.quantity' :duration='3000'></CountTo>
            </p>
            <p class=" text-gray-400 whitespace-nowrap"> {{ countItem.label }}</p>
          </el-space>
        </el-space>
      </el-card>
    </el-space>
    <div class=" w-full flex py-4 space-x-4">
      <div class=" h-96 w-2/3" id="echarts1">
      </div>
      <div class=" h-96 w-1/3" id="echarts2">
      </div>
    </div>
    <div class=" w-full flex space-x-4">
      <div class="w-2/3 bg-white p-5">
        <h2 class=" text-xl font-bold">事件记录</h2>
        <el-table :data="tableData" style="width:100%" height="250" :header-cell-style="{ backgroundColor: '#ffffff' }">
          <el-table-column prop="date" label="时间" width="160" />
          <el-table-column prop="name" label="车型" width="160" />
          <el-table-column prop="city" label="方向" width="160" />
          <el-table-column prop="address" label="违法行为" width="160" />
          <el-table-column align="right" label="记录">
            <template #default="scope">
              <el-image style=" height: 30px" :zoom-rate="1.2" :preview-src-list="[
                'https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1632467225066-c1d0e84e7558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
                'https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1590274026877-7b7c4e4dc609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
              ]"
                src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1632467225066-c1d0e84e7558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
                fit="fill" :lazy="true"></el-image>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="w-1/3 bg-white p-5">
        <h2 class=" text-xl font-bold">虚拟列表</h2>
        <InfiniteScroll :lists="lists" height="250px" :item-height="60" v-slot="{ item }">
          <el-space class=" py-3">
            <el-avatar icon="el-icon-user-solid" shape="circle"
              src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1632467225066-c1d0e84e7558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
              fit="fill"></el-avatar>
            <el-space direction="vertical" alignment="start" :size="0">
              <p class=" font-medium">{{ item.key }}-{{ item.address }}</p>
              <p class=" text-gray-300 text-sm">
                {{ item.name }}
              </p>
            </el-space>
          </el-space>
        </InfiniteScroll>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from "@/utils/getImageUrl";
import { useCount, useCharts } from "@/utils/api";
import { onMounted, reactive } from 'vue'
import { CountTo } from 'vue3-count-to';
import { CountItem } from "@/models/count_item";
import { initLineCharts, initPieCharts } from "@/utils/echarts";
import InfiniteScroll from "@/components/common/InfiniteScroll.vue";

const count = reactive([] as CountItem[])

const _lists = Array.from(Array(50)).map((_, i) => {
  return {
    key: i,
    date: '2016-05-03',
    name: '大型车',
    city: '宜宾-昭通',
    address: '抛洒废弃物',
  }
});
const lists = _lists;
onMounted(async () => {
  useCount().then(({ code, data }) => {
    if(code === 200) {
      count.push(...data)
    }
  })
  useCharts().then(({ code, data }) => {
    if(code === 200) {
      initLineCharts(document.getElementById('echarts1') as HTMLDivElement, data);
      initPieCharts(document.getElementById('echarts2') as HTMLDivElement, data);
    }
  })
})
const tableData = [
  {
    date: '2016-05-03',
    name: '大型车',
    city: '宜宾-昭通',
    address: '抛洒废弃物',
  },
  {
    date: '2016-05-02',
    name: '大型车',
    city: '昭通-宜宾',
    address: '超速',
  },
  {
    date: '2016-05-04',
    name: '大型车',
    city: '昭通-宜宾',
    address: '超速',
  },
  {
    date: '2016-05-01',
    name: '小型车',
    city: '宜宾-昭通',
    address: '超速',
  },
  {
    date: '2016-05-08',
    name: '大型车',
    city: '昭通-宜宾',
    address: '超速',
  },
  {
    date: '2016-05-06',
    name: '小型车',
    city: '宜宾-昭通',
    address: '抛洒废弃物',
  },
  {
    date: '2016-05-07',
    name: '小型车',
    city: '昭通-宜宾',
    address: '逆行',
  },
]
</script>
