<script setup lang="ts">
import { ref } from 'vue';
import PreviewableImage from '@/components/layout/PreviewableImage.vue';
import ImagePreview from '@/components/layout/ImagePreview.vue';

const props = defineProps<{
  pictures: Array<string>,
  title: string,
  description: string,
  externalLink: string
}>();

const selectedImage = ref<string | null>(null);

const openImage = (src: string) => {
  selectedImage.value = null;
  requestAnimationFrame(() => {
    selectedImage.value = src;
  });
};
</script>

<template>
  <div class="flex flex-col w-full max-w-[1311.07px] mx-auto mt-[90px] gap-4 px-4" id="detail">
    <!-- Desktop layout -->
    <div class="hidden lg:flex justify-between gap-4">
      <div class="bg-white rounded-lg shadow-md flex justify-center items-center w-[466.94px] h-[346.82px] py-[70px] px-[43px]">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
          <p>{{ description }}</p>
          <a :href="externalLink" target="_blank">
            <Button class="mt-4 w-[178px] !pl-[1rem]" icon="pi pi-external-link" label="En savoir plus" />
          </a>
        </div>
      </div>

      <div class="overflow-hidden rounded-lg w-[406.44px] h-[346.82px]">
        <PreviewableImage :src="pictures[1]" alt="Image 1" @preview="openImage" classes="w-full h-full object-cover" />
      </div>

      <div class="overflow-hidden rounded-lg w-[366.89px] h-[346.82px]">
        <PreviewableImage :src="pictures[2]" alt="Image 2" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
    </div>

    <div class="hidden lg:flex justify-between gap-4">
      <div class="overflow-hidden rounded-lg w-[450.46px] h-[411.63px]">
        <PreviewableImage :src="pictures[3]" alt="Image 3" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
      <div class="overflow-hidden rounded-lg w-[825.87px] h-[411.63px]">
        <PreviewableImage :src="pictures[4]" alt="Image 4" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Mobile layout -->
    <div class="flex flex-col lg:hidden gap-4">
      <div class="flex flex-col sm:flex-row sm:gap-4 sm:items-stretch">
        <div class="bg-white rounded-lg shadow-md flex justify-center items-center w-full sm:w-1/2 py-[70px] px-[43px]">
          <div class="p-4">
            <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
            <p>{{ description }}</p>
            <a :href="externalLink" target="_blank">
              <Button class="mt-4 w-[178px] !pl-[1rem]" icon="pi pi-external-link" label="En savoir plus" />
            </a>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg w-full sm:w-1/2 mt-4 sm:mt-0 h-[250px] sm:h-auto">
          <PreviewableImage :src="pictures[1]" alt="Image 1" @preview="openImage" classes="w-full h-full object-cover" />
        </div>
      </div>

      <div class="flex flex-col sm:flex-row sm:gap-4">
        <div class="overflow-hidden rounded-lg w-full sm:w-1/2 h-[250px]">
          <PreviewableImage :src="pictures[2]" alt="Image 2" @preview="openImage" classes="w-full h-full object-cover" />
        </div>
        <div class="overflow-hidden rounded-lg w-full sm:w-1/2 mt-4 sm:mt-0 h-[250px]">
          <PreviewableImage :src="pictures[3]" alt="Image 3" @preview="openImage" classes="w-full h-full object-cover" />
        </div>
      </div>

      <div class="overflow-hidden rounded-lg w-full h-[250px]">
        <PreviewableImage :src="pictures[4]" alt="Image 4" @preview="openImage" classes="w-full h-full object-cover" />
      </div>
    </div>
  </div>

  <!-- Global image preview modal -->
  <Teleport to="body">
    <ImagePreview :src="selectedImage" @update:src="selectedImage = null" />
  </Teleport>
</template>
