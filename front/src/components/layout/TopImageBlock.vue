<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  imageSrc: string,
  title: string,
  paragraph: string | null
}>()

</script>

<template>
  <div class="custom-bg">
    <img loading="lazy" :src="'/' + imageSrc" alt="top image" class="image"/>
    <div class="content-container max-w-[750px] w-[95%] h-auto flex flex-col items-center text-base justify-center bg-black bg-opacity-70 text-white rounded-[10px] py-[45px] px-[15px] absolute top-[175px] left-[50%]" style="transform: translateX(-50%);">
      <h2 class="text-6xl font-mistress max-[980px]:w-full max-[980px]:text-center">{{ title }}</h2>
      <p class="text-center max-w-[490px] mt-[24px]" v-if="paragraph" v-html="paragraph"></p>
    </div>
  </div>
</template>