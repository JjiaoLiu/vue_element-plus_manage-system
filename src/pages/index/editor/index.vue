<template>
  <div class="index-editor w-full overflow-hidden bg-slate-100 p-4">
    <Editor api-key="ccv2on2lv9jpl6kcnwiz7hnp42y94gx1vdoou0pdra0m3eoi" model-events="change keydown blur focus paste"
      initial-value="Once upon a time..." v-model="value" :init="{
        plugins: 'lists link image table code help wordcount',

      }" />
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { ref } from 'vue'
const value = ref("<p>Once upon a time...</p>")
</script>
