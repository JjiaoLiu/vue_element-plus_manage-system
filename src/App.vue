<script lang="ts" setup>
import Host from './Host.vue';
import { useHostStore } from './stores/host';
let hostStore = useHostStore()
let { isInit } = toRefs(hostStore);
</script>
<template>
  <el-container class="h-full w-full p-0">
    <el-header class=" p-0">
      <Header></Header>
    </el-header>
    <el-container class=" p-0 flex-1 overflow-y-auto">
      <el-aside width="200px" class=" h-full bg-gray-200 py-2 overflow-hidden">
        <Side></Side>
      </el-aside>
      <el-main height="">
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer height="">
      <Footer />
    </el-footer>
  </el-container>

</template>
