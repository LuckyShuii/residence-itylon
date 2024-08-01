<script setup lang="ts">
import type { ActivityType } from '@/types/ActivityType';
import Slugify from 'slugify';

const props = defineProps<{
    activity: ActivityType;
}>();

const getActivityPicture = (picturePath: string): string => {
  if (picturePath.split('/')[0] === 'src') {
    return '../' + picturePath
  }
  return picturePath
}
</script>

<template>
    <div class="w-[306px] bg-green-light rounded-[20px] flex flex-col">
      <img :src="getActivityPicture(activity.pictures)" alt="house" class="w-full h-[250px] object-cover rounded-t" />
      <div class="flex items-center justify-between px-[16px] py-[14px] flex-1">
        <h3 class="font-medium">{{ activity.headerTitle }}</h3>
        <RouterLink :to="'/activites/' + Slugify(activity.title).toLowerCase() + '?a=' + activity.id">
          <Button class="w-[110px] h-[30px] text-[14px] flex justify-center">Visiter</Button>
        </RouterLink>
      </div>
    </div>
  </template>
  