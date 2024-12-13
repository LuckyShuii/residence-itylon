<script setup lang="ts">
import { useRoute } from 'vue-router'
import TopImageBlock from '@/components/layout/TopImageBlock.vue';
import type { BlockTemplateType } from '@/types/BlockTemplateType';
import { onMounted, reactive, computed, ref } from 'vue';
import { useHouseStore } from '@/store/HouseStore';
import { storeToRefs } from 'pinia';
import { capitalizeFirstLetter } from '@/utils/capitalizedFirstLetter';

const { loadHouses } = useHouseStore();
const { houses } = storeToRefs(useHouseStore());

const requestHousePreviewPicture = computed(() => requestedHouse.value?.title === 'cerisier' ? 'kiwi' : requestedHouse.value?.title)

const route = useRoute()
const requestedHouse = computed(() => houses.value.find((house) => house.id === Number(route.query.h)))

const blockData = reactive<BlockTemplateType>({
  title: '',
  imageSrc: '',
  paragraph: ''
});

const loadBlockData = () => {
    blockData.title = capitalizeFirstLetter(requestedHouse.value?.title as string),
    blockData.imageSrc = `/src/assets/photos/houses/${requestHousePreviewPicture.value}/${requestHousePreviewPicture.value}_preview.jpg`,    
    blockData.paragraph = requestedHouse.value?.descriptionTitle
}

onMounted(async () => {
    await loadHouses()
    loadBlockData()
})
</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph as string" :image-src="blockData.imageSrc" />
  <pre>{{ requestedHouse }}</pre>
</template>
