<template>
    <img
      :src="src"
      :alt="alt"
      :class="classes ?? ''"
      class="cursor-zoom-in hover:opacity-80 transition-all duration-200"
      @click="previewImage"
    />
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    src: string;
    alt?: string;
    classes?: string;
  }>();
  
  const emit = defineEmits<{
    (e: 'preview', src: string): void;
  }>();
  
  const previewImage = () => {
    emit('preview', props.src);
  };
  </script>
  