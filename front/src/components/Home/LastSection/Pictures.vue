<script setup lang="ts">
import { ref } from 'vue';
import PreviewableImage from '@/components/layout/PreviewableImage.vue';
import ImagePreview from '@/components/layout/ImagePreview.vue';

const selectedImage = ref<string | null>(null);

const openImage = (src: string) => {
  selectedImage.value = null;
  requestAnimationFrame(() => {
    selectedImage.value = src;
  });
};
</script>

<template>
  <div class="container max-w-[860px] max-[980px]:w-full max-[980px]:flex max-[980px]:flex-col max-[980px]:items-center">
    <div class="grid grid-cols-12 gap-4 max-[980px]:w-[90%] max-[640px]:flex max-[640px]:flex-col max-[640px]:justify-center">
      <div class="col-span-4 h-[225px] bg-gray-200 rounded-lg overflow-hidden">
        <PreviewableImage src="/webp/home/image1.webp" alt="Image 1" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
      <div class="col-span-4 h-[225px] bg-gray-200 rounded-lg overflow-hidden">
        <PreviewableImage src="/webp/home/image2.webp" alt="Image 2" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
      <div class="col-span-4 h-[225px] bg-gray-200 rounded-lg overflow-hidden">
        <PreviewableImage src="/webp/home/image3.webp" alt="Image 3" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-4 max-[980px]:w-[90%] max-[640px]:flex max-[640px]:flex-col max-[640px]:justify-center">
      <div class="col-span-7 h-[270px] bg-gray-200 rounded-lg overflow-hidden">
        <PreviewableImage src="/webp/home/image4.webp" alt="Image 4" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
      <div class="col-span-5 h-[270px] bg-gray-200 rounded-lg overflow-hidden">
        <PreviewableImage src="/webp/home/image5.webp" alt="Image 5" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
    </div>
  </div>

  <Teleport to="body">
    <ImagePreview :src="selectedImage" @update:src="selectedImage = null" />
  </Teleport>
</template>
