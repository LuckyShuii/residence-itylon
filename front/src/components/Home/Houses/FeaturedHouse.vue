<script setup lang="ts">
import type { HouseType } from '@/types/HouseType';
import Slugify from 'slugify';

const props = defineProps<{
    house: HouseType;
    displayPrice: boolean
}>();
</script>

<template>
    <div class="w-[306px] bg-white rounded-[20px] flex flex-col ml-[121px]">
        <img :src="'src/assets/photos/best-photo/' + props.house.previewPicture + '.jpg'" alt="house" class="w-full h-[250px] object-cover rounded-t" />
        <div class="flex items-center justify-between px-[16px] py-[14px]">
            <div class="flex flex-col">
                <h3 class="font-medium">{{ house.title }}</h3>
                <p class="text-[14px]">{{ house.capacity }} personnes</p>
            </div>
            <RouterLink :to="'/les-maison/' + Slugify(house.title.toLowerCase()) + '?h=' + house.id">
                <Button class="w-[110px] h-[30px] text-[14px] flex justify-center">Visiter</Button>
            </RouterLink>
        </div>
    </div>
</template>