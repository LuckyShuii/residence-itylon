<script setup lang="ts">
import { reactive, ref } from 'vue';
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import type { BlockTemplateType } from '@/types/BlockTemplateType';
import { useResidenceStore } from "@/store/ResidenceStore";
import { storeToRefs } from "pinia";
import PreviewableImage from '@/components/layout/PreviewableImage.vue';
import ImagePreview from '@/components/layout/ImagePreview.vue';

const selectedImage = ref<string | null>(null);

const openImage = (src: string) => {
  selectedImage.value = null;
  requestAnimationFrame(() => {
    selectedImage.value = src;
  });
};

const { residenceHeaderTitle, description } = storeToRefs(useResidenceStore());

const blockData = reactive<BlockTemplateType>({
  title: 'La résidence',
  imageSrc: 'webp/residence/residence_main.webp',
  paragraph: "Voluptate vitae quo maxime asperiores. Mollitia iusto qui nemo deserunt magni aut reiciendis consequuntur. Accusantium sunt ducimus assumenda. Praesentium est laborum numquam repellendus"
});
</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph ?? 'not found'" :image-src="blockData.imageSrc" />
    
  <div class="mx-4">
    <div class="flex justify-center mt-[80px] max-w-[1270px] mx-auto">
      <div class="flex justify-center max-h-[420px] max-[1315px]:flex-col max-[1315px]:items-center max-[1315px]:max-h-none">
        <div class="py-[40px] px-[35px] w-[570px] bg-green-light rounded-[10px] max-[1315px]:w-full max-[1315px]:mb-6">
          <h2 class="mb-4 font-mistress text-[40px]">{{ residenceHeaderTitle }}</h2>
          <p v-html="description"></p>
        </div>
        <div class="h-full bg-green-light w-[670px] rounded-[10px] ml-[30px] max-[1315px]:ml-0 max-[1315px]:w-full max-[1315px]:h-[300px]">
          <PreviewableImage src="/webp/home/image4.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
      </div>
    </div>

    <div class="mt-[80px] max-w-[1270px] mx-auto space-y-[40px] max-[1315px]:mt-[15px] max-[1315px]:space-y-[15px]">
      <div class="flex flex-wrap justify-between gap-y-4">
        <div class="w-[324px] h-[281px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/residence/residence_entrance_dirt.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[310px] h-[281px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/residence/residence_bridge.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[556px] h-[281px] max-[1315px]:w-full max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/residence/residence_tree_lavander.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
      </div>

      <div class="flex flex-wrap justify-between gap-y-4">
        <div class="w-[556px] h-[392px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/home/image3.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[310px] h-[392px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/residence/residence_pool.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[324px] h-[392px] max-[1315px]:w-full max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/residence/residence_main.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
      </div>

      <div class="flex flex-wrap justify-between gap-y-4">
        <div class="w-[324px] h-[392px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/residence/residence_h_trees.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[310px] h-[392px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/residence/residence_laverie_door.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[556px] h-[392px] max-[1315px]:w-full max-[1315px]:h-[350px]">
          <PreviewableImage src="/webp/home/image2.webp" @preview="openImage" classes="object-cover w-full h-full rounded-[10px]" />
        </div>
      </div>
    </div>
  </div>

  <!-- Téléport pour toutes les images -->
  <Teleport to="body">
    <ImagePreview :src="selectedImage" @update:src="selectedImage = null" />
  </Teleport>
</template>
