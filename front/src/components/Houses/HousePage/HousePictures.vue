<script setup lang="ts">
import type { HouseType } from '@/types/HouseType';
import { computed, ref } from 'vue';
import PreviewableImage from '@/components/layout/PreviewableImage.vue';
import ImagePreview from '@/components/layout/ImagePreview.vue';

const props = defineProps<{
  houseData: HouseType | undefined;
}>();

const selectedImage = ref<string | null>(null);

const openImage = (src: string) => {
  selectedImage.value = null;
  requestAnimationFrame(() => {
    selectedImage.value = src;
  });
};

const houseTitle = computed(() =>
  props.houseData && props.houseData.title === 'cerisier' ? 'kiwi' : props.houseData?.title
);

const getSrcHousePicture = (pictureId: number): string =>
  `/webp/houses/${houseTitle.value}/${houseTitle.value}_${pictureId}.webp`;
</script>

<template>
  <div class="flex flex-col mt-[20px]">
    <div class="flex">
      <div class="w-[466px] h-[275px]">
        <PreviewableImage
          :src="getSrcHousePicture(1)"
          :alt="houseTitle + ' picture 1'"
          @preview="openImage"
          classes="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      <div class="mx-[37px] w-[425px] h-[275px]">
        <PreviewableImage
          :src="getSrcHousePicture(2)"
          :alt="houseTitle + ' picture 2'"
          @preview="openImage"
          classes="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      <div class="w-[345px] h-[275px]">
        <PreviewableImage
          :src="getSrcHousePicture(3)"
          :alt="houseTitle + ' picture 3'"
          @preview="openImage"
          classes="w-full h-full object-cover rounded-[10px]"
        />
      </div>
    </div>
    <div class="flex mt-[31px]">
      <div class="mr-[37px] w-[707px] h-[327px]">
        <PreviewableImage
          :src="getSrcHousePicture(4)"
          :alt="houseTitle + ' picture 4'"
          @preview="openImage"
          classes="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      <div class="w-[567px] h-[327px]">
        <PreviewableImage
          :src="getSrcHousePicture(5)"
          :alt="houseTitle + ' picture 5'"
          @preview="openImage"
          classes="w-full h-full object-cover rounded-[10px]"
        />
      </div>
    </div>
  </div>

  <Teleport to="body">
    <ImagePreview :src="selectedImage" @update:src="selectedImage = null" />
  </Teleport>
</template>
