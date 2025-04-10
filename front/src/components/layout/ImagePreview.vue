<template>
  <Dialog
    v-model:visible="visible"
    :modal="true"
    :closable="true"
    :dismissableMask="true"
    class="p-0"
    :style="{ width: 'auto', maxWidth: '90vw' }"
    @hide="emit('close')"
  >
    <img
      :src="src ?? ''"
      alt="preview"
      class="object-contain max-w-full max-h-[80vh]"
    />
  </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ src: string | null }>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const visible = ref(false);

watch(() => props.src, (newSrc) => {
  visible.value = !!newSrc;
});
</script>
