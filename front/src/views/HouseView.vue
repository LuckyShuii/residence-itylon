<script setup lang="ts">
import { useRoute } from 'vue-router'
import TopImageBlock from '@/components/layout/TopImageBlock.vue';
import type { BlockTemplateType } from '@/types/BlockTemplateType';
import { onMounted, reactive, computed } from 'vue';
import { useHouseStore } from '@/store/HouseStore';
import { storeToRefs } from 'pinia';
import { capitalizeFirstLetter } from '@/utils/capitalizedFirstLetter';
import TopSectionInfo
  from "@/components/Houses/HousePage/TopSectionInfo.vue";
import type { HouseType } from '@/types/HouseType';
import HousePictures from '@/components/Houses/HousePage/HousePictures.vue';

const { loadHouses } = useHouseStore();
const { houses } = storeToRefs(useHouseStore());

const requestHousePreviewPicture = computed<string|undefined>(() => requestedHouse.value ? requestedHouse.value?.title === 'cerisier' ? 'kiwi' : requestedHouse.value?.title : undefined)

const route = useRoute()
const requestedHouse = computed<HouseType|undefined>(() => houses.value ? houses.value.find((house) => house.id === Number(route.query.h)) : undefined)

const blockData = reactive<BlockTemplateType>({
  title: '',
  imageSrc: '',
  paragraph: ''
});

const loadBlockData = () => {
    blockData.title = capitalizeFirstLetter(requestedHouse.value?.title as string),
    blockData.imageSrc = `photos/houses/${requestHousePreviewPicture.value}/${requestHousePreviewPicture.value}_preview.jpg`,    
    blockData.paragraph = requestedHouse.value?.descriptionTitle
}

onMounted(async () => {
  if (!houses.value.length) await loadHouses()
  loadBlockData()
})
</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph ?? 'not found'" :image-src="blockData.imageSrc" />
  <div class="w-full flex flex-col justify-center items-center">
      <TopSectionInfo class="w-[1884px] flex justify-center items-center flex-wrap gap-y-[20px] gap-x-[20px] mx-8" :houseData="requestedHouse" />
      <HousePictures :houseData="requestedHouse" />
  </div>
</template>
