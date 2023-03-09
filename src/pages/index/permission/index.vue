<template>
  <div class="index-permission w-full overflow-hidden bg-slate-100 p-4">
    <p v-if="route.meta.isAdmin">当前是admin用户</p>
    <p v-else>当前不是admin用户</p>
    <el-button v-if="!route.meta.isAdmin" type="primary" size="default" @click="changeMenu">切换为admin用户</el-button>
    <el-button v-permission="'isAdmin'" type="primary" size="default">我是一个有admin权限的组件</el-button>
  </div>
</template>

<script setup lang="ts">
import { handleRouterMeta } from '@/router';
import { useMenuStore } from '@/stores/menu';

let route = useRoute()
const { changeMenus, sideMenusFlat } = useMenuStore()
const changeMenu = async () => {
  await changeMenus()
  handleRouterMeta(sideMenusFlat);
  location.reload()
}

</script>