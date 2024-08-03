<script setup lang="ts">
import ActivityCard from "@/components/ActivityCard.vue";

const props = defineProps<{
  activities: {},
  isAllActivityView?: boolean
}>()
</script>

<template>
  <div class="flex justify-center mt-[80px] max-[980px]:w-full">
    <div class="px-[85px] pb-[90px] flex items-center justify-center max-w-[1480px] w-full flex-col max-[980px]:w-[90%] max-[980px]:px-0 max-[980px]:min-w-[16rem]">
      <h2 class="font-mistress text-[45px] mb-[60px] max-[980px]:w-full max-[980px]:text-center" v-if="isAllActivityView !== true">Des activités pour tous les goûts</h2>
      <div class="flex flex-wrap justify-center gap-4 max-[980px]:w-full" id="allActivities">
        <ActivityCard v-for="activity in activities" :key="activity.id" :activity="activity" class="flex justify-center" />
      </div>
    </div>
  </div>
</template>