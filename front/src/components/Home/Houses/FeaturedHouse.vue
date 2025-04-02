<script setup lang="ts">
import type { HouseType } from '@/types/HouseType';
import Slugify from 'slugify';

const props = defineProps<{
    house: HouseType;
    displayPrice: boolean
}>();

const getCapacity = (): string => {
  if (props.house.capacityMax === props.house.capacityMin) {
    return `${props.house.capacityMin}`;
  }

  return `${props.house.capacityMin} à ${props.house.capacityMax}`;
} 
</script>

<template>
    <div class="w-[306px] bg-white rounded-[10px] flex flex-col ml-[121px]">
        <img :src="'/photos/best-photo/' + props.house.previewPicture + '.jpg'" alt="house" class="w-full h-[250px] object-cover rounded-t" />
        <div class="flex items-center justify-between px-[16px] py-[14px]">
            <div class="flex flex-col">
                <h3 class="font-medium">{{ house.title }}</h3>
                <p class="text-[14px]">{{ getCapacity() }} personnes</p>
            </div>
            <RouterLink :to="'/decouvrir/les-maisons/' + Slugify(house.title.toLowerCase()) + '?h=' + house.id">
                <Button class="w-[110px] h-[30px] text-[14px] flex justify-center">Visiter</Button>
            </RouterLink>
        </div>
    </div>
</template>