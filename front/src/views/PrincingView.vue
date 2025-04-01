<script setup lang="ts">
import TopImageBlock from '@/components/layout/TopImageBlock.vue';
import BaseInfo from '@/components/Princing/BaseInfo.vue';
import PrincingBlock from '@/components/Princing/PrincingBlock.vue';
import type { BlockTemplateType } from '@/types/BlockTemplateType';
import { onMounted, reactive } from 'vue';
import { useHouseStore } from '@/store/HouseStore';
import { storeToRefs } from 'pinia';

const { getHousesPrincing } = useHouseStore();
const { housesPrincing } = storeToRefs(useHouseStore());

const currentYear = new Date().getFullYear();

const blockData = reactive<BlockTemplateType>({
  title: `Tarifs ${currentYear}`,
  paragraph: 'Voluptate vitae quo maxime asperiores. Mollitia iusto qui nemo deserunt magni aut reiciendis consequuntur. Accusantium sunt ducimus assumenda. Praesentium est laborum numquam repellendus',
  imageSrc: '../src/assets/photos/activities/plage.jpg'
});

onMounted(async() => {
    await getHousesPrincing();
})

</script>

<template>
    <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph ?? 'not found'" :image-src="blockData.imageSrc" />
    <div class="flex w-full justify-center flex-wrap gap-[40px] max-w-[1300px] mx-auto mt-[50px]">
        <BaseInfo />
        <PrincingBlock :season="house.season"
                      :dates="house.dates"
                      :pricesWithHouseName="house.pricesWithHouseName"
                      :key="1" 
                      v-for="house in housesPrincing"
                      class="border border-[green-btn] rounded-[20px]"
                      />
    </div>
</template>
