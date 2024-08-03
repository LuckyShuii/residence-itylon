<script setup lang="ts">
const props = defineProps<{
  pictures: Array<string>,
  title: string,
  description: string,
  externalLink: string
}>()
</script>

<template>
  {{ pictures }} <br> {{ title }} <br> {{ description }} <br> {{ externalLink }}
</template>