<script setup lang="ts">
import type { HouseType } from '@/types/HouseType';
import { computed } from 'vue';

const props = defineProps<{
    houseData: HouseType | undefined;
}>();

const houseTitle = computed(() => props.houseData && props.houseData.title === 'cerisier' ? 'kiwi' : props.houseData?.title)

const getSrcHousePicture = (picrtureId: number): string => `/photos/houses/${houseTitle.value}/${houseTitle.value}_${picrtureId}.jpg`;

</script>

<template>
    <div class="flex flex-col mt-[20px]">
        <div class="flex">
            <div class="w-[466px] h-[275px]">
                <img loading="lazy" :src=getSrcHousePicture(1) class="w-full h-full object-cover rounded-[10px]" :alt="houseTitle + ' picture'" />
            </div>
            <div class="mx-[37px] w-[425px] h-[275px]">
                <img loading="lazy" :src=getSrcHousePicture(2) class="w-full h-full object-cover rounded-[10px]" :alt="houseTitle + ' picture'" />
            </div>
            <div class="w-[345px] h-[275px]">
                <img loading="lazy" :src=getSrcHousePicture(3) class="w-full h-full object-cover rounded-[10px]" :alt="houseTitle + ' picture'" />
            </div>
        </div>
        <div class="flex mt-[31px]">
            <div class="mr-[37px] w-[707px] h-[327px]">
                <img loading="lazy" :src=getSrcHousePicture(4) class="w-full h-full object-cover rounded-[10px]" :alt="houseTitle + ' picture'" />
            </div>
            <div class="w-[567px] h-[327px]">
                <img loading="lazy" :src=getSrcHousePicture(5) class="w-full h-full object-cover rounded-[10px]" :alt="houseTitle + ' picture'" />
            </div>
        </div>
    </div>
</template>