<script lang="ts" setup>
import { language } from '@/utils/injectionKey'
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const local = ref(zhCn)

provide(language, local)
</script>
<template>
  <el-config-provider :locale="local">
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </el-config-provider>
</template>
