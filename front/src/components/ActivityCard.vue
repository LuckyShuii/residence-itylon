<script setup lang="ts">
import { defineProps } from 'vue';
import type { ActivityType } from '@/types/ActivityType';

const props = defineProps<{
    activity: ActivityType;
}>();
</script>

<template>
    <div class="w-[306px] bg-green-light rounded-[20px] flex flex-col">
        <img :src="activity.pictures" alt="house" class="w-full h-[250px] object-cover rounded-t" />
        <div class="flex items-center justify-between px-[16px] py-[14px]">
            <div class="flex flex-col">
                <h3 class="font-medium">{{ activity.headerTitle }}</h3>
            </div>
            <Button class="w-[110px] h-[30px] text-[14px] flex justify-center">Visiter</Button>
        </div>
    </div>
</template>