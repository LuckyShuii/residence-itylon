<script setup lang="ts">
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import { reactive, onMounted } from "vue";
import type { BlockTemplateType } from '@/types/BlockTemplateType'
import HouseCard from "@/components/Houses/HouseCard.vue";
import { useHouseStore } from "@/store/HouseStore";
import {storeToRefs} from "pinia";

const { loadHouses } = useHouseStore();
const { houses } = storeToRefs(useHouseStore());

const blockData = reactive<BlockTemplateType>({
  title: 'Les maisons',
  paragraph: 'Deux phrases pour parler des maisons',
  imageSrc: '../src/assets/photos/contact/a%20residence%20(16).jpg'
});

onMounted(async () => {
  await loadHouses()
})

</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph" :imageSrc="blockData.imageSrc" />
  <div class="flex w-full justify-center items-center mt-[80px]">
    <div class="w-[1284px] flex flex-wrap gap-y-[20px] gap-x-[20px]">
      <HouseCard v-for="house in houses" :house="house" :key="house!.id" />
    </div>
  </div>
</template>