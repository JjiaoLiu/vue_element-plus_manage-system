export interface HostProps {
  host?: string;
}
export default defineComponent({
  props: ["host"],
  emits: ["update:host"],
  computed: {
    value: {
      get(): string {
        return this.host;
      },
      set(value: string): void {
        this.$emit("update:host", value);
      },
    },
  },
  render() {
    return (
      <div>
        <pre>
          <code>defineComponent(object)</code>
        </pre>
        <el-input type="text" v-model={this.value} />
      </div>
    );
  },
});
