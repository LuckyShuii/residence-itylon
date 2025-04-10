<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import type { ActivityType } from '@/types/ActivityType';
import Slugify from 'slugify';

const props = defineProps<{
    activity: ActivityType;
}>();

const isResponsive = ref(window.innerWidth <= 1443)

const updateScreenWidth = () => {
  isResponsive.value = window.innerWidth <= 1443
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth)
})

const getActivityPicture = (picturePath: string): string => {
  return '/' + picturePath.split(",")[0]
}

const scrollToDetail = () => {
  const activityContainer = !isResponsive.value ? document.querySelector('#allActivities') : document.querySelector('#detail');
  if (activityContainer) {
    activityContainer.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="w-[306px] bg-green-light rounded-[10px] flex flex-col">
    <img loading="lazy" :src="getActivityPicture(activity.pictures)" alt="house" class="w-full h-[250px] object-cover rounded-t" />
    <div class="flex items-center justify-between px-[16px] py-[14px] flex-1">
      <h3 class="font-medium">{{ activity.headerTitle }}</h3>
      <RouterLink :to="'/activites/' + Slugify(activity.title).toLowerCase() + '?a=' + activity.id" @click="scrollToDetail"
      >
        <Button class="w-[110px] h-[30px] text-[14px] flex justify-center">Visiter</Button>
      </RouterLink>
    </div>
  </div>
</template>
