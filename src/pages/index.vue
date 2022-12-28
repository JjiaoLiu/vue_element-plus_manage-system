<script lang="tsx">

export default defineComponent({
    setup() {
        return () => <div>
            11111
            {/* <el-pagination
                total={100} background>
            </el-pagination> */}
            {/* <BannerVue /> */}
        </div>;
    },
    beforeRouteEnter(to, from, next) {
        console.log('首页', 'to', to, 'from', from);
    }
})
</script>
