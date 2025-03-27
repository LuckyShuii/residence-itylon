<script setup lang="ts">
import type { HouseType } from '@/types/HouseType';

const props = defineProps<{
    houseData: HouseType | undefined;
}>();

const getSrcHousePicture = (picrtureId: number): string => `/src/assets/photos/houses/${props.houseData?.title}/${props.houseData?.title}_${picrtureId}.jpg`;

</script>

<template>
    <div class="flex flex-col mt-[20px]">
        <div class="flex">
            <div class="w-[466px] h-[275px]">
                <img :src=getSrcHousePicture(1) alt="house1" class="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div class="mx-[37px] w-[425px] h-[275px]">
                <img :src=getSrcHousePicture(2) alt="house1" class="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div class="w-[345px] h-[275px]">
                <img :src=getSrcHousePicture(3) alt="house1" class="w-full h-full object-cover rounded-[10px]" />
            </div>
        </div>
        <div class="flex mt-[31px]">
            <div class="mr-[37px] w-[707px] h-[327px]">
                <img :src=getSrcHousePicture(4) alt="house1" class="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div class="w-[567px] h-[327px]">
                <img :src=getSrcHousePicture(5) alt="house1" class="w-full h-full object-cover rounded-[10px]" />
            </div>
        </div>
    </div>
</template>