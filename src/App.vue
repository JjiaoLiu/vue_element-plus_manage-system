<script lang="tsx">
import Host from './Host.vue';
import { useHostStore } from './stores/host';
import HeaderVue from '@/components/layout/header/Header.vue'
export default defineComponent({
  setup() {
    let hostStore = useHostStore()
    let { isInit } = toRefs(hostStore);
    return () => <div>
      {isInit.value ? <el-container>
        <el-header height="">
          <HeaderVue />
        </el-header>
        <el-main height="">
          <router-view></router-view>
        </el-main>
        <el-footer height="">
        </el-footer>
      </el-container>
        : <Host />}
    </div>
  },
})
</script>
