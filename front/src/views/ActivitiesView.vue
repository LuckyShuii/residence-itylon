<script setup lang="ts">
import {ref, onMounted, reactive, watch} from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useRoute } from 'vue-router'
import AllActivities from "@/components/Activities/AllActivities.vue";
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import Activity from "@/components/Activities/Activity.vue";
import type { ActivityType } from '@/types/ActivityType';
import type { BlockTemplateType } from '@/types/BlockTemplateType'

const route = useRoute()

const toast = useToast();
const activities = ref<ActivityType[]>([]);
const activityPictures = ref<string[]>([]);

interface ActivityDetail {
  title: string,
  description: string,
  externalLink: string
}

const activityDetailData = reactive<ActivityDetail>({
  title: '',
  description: '',
  externalLink: ''
})

const blockData = reactive<BlockTemplateType>({
  title: '',
  paragraph: '',
  imageSrc: ''
});

const loadActivities = async () => {
  try {
    activities.value = (await axios.get('http://localhost:8002/activities')).data;
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement des activités', life: 6000 });
  }
};

const generateBasicBlockData = () => {
  blockData.title = "Les activités"
  blockData.paragraph = "Voluptate vitae quo maxime asperiores. Mollitia iusto qui nemo deserunt magni aut reiciendis consequuntur. Accusantium sunt ducimus assumenda. Praesentium est laborum numquam repellendus"
  blockData.imageSrc = "../src/assets/photos/activities/plage.jpg"
}

const generateImgSrc = (img: string): string => {
  return '../' + img
}

const generateActivityPictures = (images: string): void => {
  activityPictures.value = images.split(',')
  activityPictures.value.pop()
}

const generateAdvancedData = (id: number): void => {
  let currentActivity = activities.value[id - 1]
  blockData.title = currentActivity.headerTitle
  blockData.paragraph = currentActivity.headerDescription
  blockData.imageSrc = generateImgSrc(currentActivity.pictures.split(",")[0])
  activityDetailData.title = currentActivity.title
  activityDetailData.description = currentActivity.description
  generateActivityPictures(currentActivity.pictures)
}

const loadBlockData = (id: number): void => {
  if (id === 0) generateBasicBlockData()
  if (id > 0) generateAdvancedData(id)
}

const isAllActivities = () => route.query.a === '0'

watch(async () => route.query, async () => {
  if (activities.value.length === 0) await loadActivities();
  let routerValue = route.query.a
  if (routerValue && typeof routerValue === 'string') loadBlockData(parseInt(routerValue))
}, { immediate: true })

onMounted(async () => {
  await loadActivities();
  console.log(activities.value)
});
</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph" :image-src="blockData.imageSrc" />
  <AllActivities v-if="isAllActivities()" :activities :isAllActivityView="true" />
  <Activity v-if="!isAllActivities()" :pictures="activityPictures" :title="activityDetailData.title" :description="activityDetailData.description" :external-link="activityDetailData.externalLink" />
</template>