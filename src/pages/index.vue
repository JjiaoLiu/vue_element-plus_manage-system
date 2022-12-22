<script lang="tsx">
export default defineComponent({
    setup() {
        return () => <div>
            首页
            {/* <BannerVue /> */}
        </div>;
    },
    beforeRouteEnter(to, from, next) {
        console.log('首页', 'to', to, 'from', from);
    }
})
</script>
