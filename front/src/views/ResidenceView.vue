<script setup lang="ts">
import { reactive } from 'vue';
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import type { BlockTemplateType } from '@/types/BlockTemplateType';
import { useResidenceStore} from "@/store/ResidenceStore";
import {storeToRefs} from "pinia";

const { residenceHeaderTitle, description } = storeToRefs(useResidenceStore());

const blockData = reactive<BlockTemplateType>({
  title: 'La résidence',
  imageSrc: '../src/assets/photos/residence/residence_main.jpg'
});

const generateBasicBlockData = () => {
  blockData.title = "Les activités";
  blockData.paragraph = "Voluptate vitae quo maxime asperiores. Mollitia iusto qui nemo deserunt magni aut reiciendis consequuntur. Accusantium sunt ducimus assumenda. Praesentium est laborum numquam repellendus";
  blockData.imageSrc = "../src/assets/photos/activities/plage.jpg";
};
</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph as string" :image-src="blockData.imageSrc" />

  <!-- Conteneur supérieur avec largeur maximale de 1270px et centré -->
  <div class="flex justify-center mt-[80px] max-w-[1270px] mx-auto">
    <div class="flex justify-center max-h-[420px]">
      <div class="py-[40px] px-[35px] w-[570px] bg-green-light rounded-[10px]">
        <h2 class="mb-4 font-mistress text-[40px]">{{residenceHeaderTitle}}</h2>
        <p v-html="description"></p>
      </div>
      <div class="h-full bg-green-light w-[670px] rounded-[10px] ml-[30px]">
        <img src="/src/assets/photos/home/image4.jpg" alt="residence entrance" class="object-cover w-full h-full rounded-[10px]"/>
      </div>
    </div>
  </div>

  <div class="mt-[80px] max-w-[1270px] mx-auto">
    <div class="flex space-x-[40px] mb-[40px]">
      <div class="w-[324px] h-[281px]">
        <img src="/src/assets/photos/residence/residence_entrance_dirt.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
      <div class="w-[310px] h-[281px]">
        <img src="/src/assets/photos/residence/residence_bridge.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
      <div class="w-[556px] h-[281px]">
        <img src="/src/assets/photos/residence/residence_tree_lavander.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
    </div>

    <div class="flex space-x-[40px] mb-[40px]">
      <div class="w-[556px] h-[392px]">
        <img src="/src/assets/photos/home/image3.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
      <div class="w-[310px] h-[392px]">
        <img src="/src/assets/photos/residence/residence_pool.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
      <div class="w-[324px] h-[392px]">
        <img src="/src/assets/photos/residence/residence_main.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
    </div>

    <div class="flex space-x-[40px]">
      <div class="w-[324px] h-[392px]">
        <img src="/src/assets/photos/residence/residence_h_trees.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
      <div class="w-[310px] h-[392px]">
        <img src="/src/assets/photos/residence/residence_laverie_door.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
      <div class="w-[556px] h-[392px]">
        <img src="/src/assets/photos/home/image2.jpg" alt="" class="object-cover w-full h-full rounded-[10px]">
      </div>
    </div>
  </div>
</template>


