<script setup lang="ts">
import { reactive } from 'vue';
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import type { BlockTemplateType } from '@/types/BlockTemplateType';
import { useResidenceStore } from "@/store/ResidenceStore";
import { storeToRefs } from "pinia";

const { residenceHeaderTitle, description } = storeToRefs(useResidenceStore());

const blockData = reactive<BlockTemplateType>({
  title: 'La résidence',
  imageSrc: 'photos/residence/residence_main.jpg',
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
          <img loading="lazy" src="/photos/home/image4.jpg" alt="residence entrance" class="object-cover w-full h-full rounded-[10px]" />
        </div>
      </div>
    </div>

    <div class="mt-[80px] max-w-[1270px] mx-auto space-y-[40px] max-[1315px]:mt-[15px] max-[1315px]:space-y-[15px]">
      <div class="flex flex-wrap justify-between gap-y-4">
        <div class="w-[324px] h-[281px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/residence/residence_entrance_dirt.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[310px] h-[281px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/residence/residence_bridge.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[556px] h-[281px] max-[1315px]:w-full max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/residence/residence_tree_lavander.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
      </div>

      <div class="flex flex-wrap justify-between gap-y-4">
        <div class="w-[556px] h-[392px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/home/image3.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[310px] h-[392px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/residence/residence_pool.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[324px] h-[392px] max-[1315px]:w-full max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/residence/residence_main.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
      </div>

      <div class="flex flex-wrap justify-between gap-y-4">
        <div class="w-[324px] h-[392px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/residence/residence_h_trees.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[310px] h-[392px] max-[1315px]:w-[calc(50%-10px)] max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/residence/residence_laverie_door.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
        <div class="w-[556px] h-[392px] max-[1315px]:w-full max-[1315px]:h-[350px]">
          <img loading="lazy" src="/photos/home/image2.jpg" alt="" class="object-cover w-full h-full rounded-[10px]" />
        </div>
      </div>
    </div>
  </div>
</template>
