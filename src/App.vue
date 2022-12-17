<script lang="ts" setup>
import Host from './Host.vue';
import { useHostStore } from './stores/host';
import Header from '@/components/layout/header/Header.vue'
import Menu from "@/components/layout/menu/Menu.vue"
let hostStore = useHostStore()
let { isInit } = toRefs(hostStore);
</script>
<template>
  <el-container v-if="isInit" class="h-full w-full">
    <el-aside width="200px" class="bg-slate-200">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main height="">
        <router-view></router-view>
      </el-main>
      <el-footer height="">
      </el-footer>
    </el-container>
  </el-container>
  <Host v-else />
</template>
