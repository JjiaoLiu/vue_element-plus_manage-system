<script lang="tsx">
import { Bar } from '@/components/Bar';
export default defineComponent({
  setup() {
    const message = ref('a')
    return { message }
  },
  render() {
    return <div>
      <el-container>
        <el-header height="80px">
          Header content {this.message}
        </el-header>
        <el-container>
          <el-aside width="200px">
            Aside content
            <Bar></Bar>
          </el-aside>
          <el-container>
            <el-main height="">
              <router-view></router-view>
            </el-main>
            <el-footer height="">
              Footer content
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  }
})
</script>
