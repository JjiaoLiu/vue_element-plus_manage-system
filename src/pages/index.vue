<script setup lang="ts">
import { onMounted } from 'vue'
import { onBeforeRouteUpdate } from "vue-router";
import LayoutHeader from "@/components/layout/Header.vue";
import { useUserStore } from '@/stores/user';
import SideMenu from '@/components/layout/menu/SideMenu.vue';
const { checkLogin, profile } = useUserStore()

onMounted(async () => {
  await checkLogin()
})
onBeforeRouteUpdate((to, from) => {
  console.log('首页', 'to', to.meta);
})
</script>

<template>
  <el-container class="h-full w-full">
    <el-header>
      <LayoutHeader :profile="profile"></LayoutHeader>
    </el-header>
    <el-container class=" p-0 flex-1 overflow-y-auto">
      <el-aside width="200px" class=" h-full py-2 overflow-hidden">
        <SideMenu></SideMenu>
      </el-aside>
      <el-main class="p-0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
