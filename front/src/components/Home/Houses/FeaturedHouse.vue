<script setup lang="ts">
import { defineProps } from 'vue';
import type { HouseType } from '@/types/HouseType';

const props = defineProps<{
    house: HouseType;
}>();
</script>

<template>
    <div class="w-[306px] bg-white rounded-[20px] flex flex-col ml-[121px]">
        <img :src="'src/assets/photos/best-photo/' + props.house.previewPicture + '.jpg'" alt="house" class="w-full h-[250px] object-cover rounded-t" />
        <div class="flex items-center justify-between px-[16px] py-[14px]">
            <div class="flex flex-col">
                <h3>{{ house.title }}</h3>
                <p>{{ house.capacity }} personnes</p>
            </div>
            <Button label="Visiter" class="w-[111px] h-[29px]" />
        </div>
    </div>
</template>