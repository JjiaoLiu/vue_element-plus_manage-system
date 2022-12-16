export default defineComponent(() => {
  interface HostProps {
    host?: string;
  }
  let props = defineProps<HostProps>();
  let emits = defineEmits<{ (e: "update:host", host: string): void }>();
  let { host } = toRefs(props);
  const emitChange = (value: string) => {
    emits("update:host", value);
  };
  return (
    <div>
      <pre>
        <code>defineComponent</code>
      </pre>
      <input
        style={{ border: "1px solid red" }}
        type="text"
        value={host}
        onInput={(e) => {
          emitChange((e.target as HTMLInputElement)!.value);
        }}
      />
    </div>
  );
});
