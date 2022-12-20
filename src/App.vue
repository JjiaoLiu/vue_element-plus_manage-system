<script lang="ts" setup>
// import { useCssVar, type MaybeElement } from '@vueuse/core'

// const elv = ref(null)
// let colorRef = ref('--el-text-color-primary')
// const color = useCssVar(colorRef, elv)
// console.log(color);


// setTimeout(() => {
//   color.value = 'green'
//   console.log(color.value);

// })

</script>
<template>
  <el-container class="h-full w-full p-0">
    <el-header class=" p-0">
      <Header></Header>
    </el-header>
    <el-container class=" p-0 flex-1 overflow-y-auto">
      <el-aside width="200px" class=" h-full py-2 overflow-hidden">
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
