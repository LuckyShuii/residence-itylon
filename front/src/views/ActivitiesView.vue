<script setup lang="ts">
import {ref, onMounted, reactive, watch} from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useRoute } from 'vue-router'
import AllActivities from "@/components/Activities/AllActivities.vue";
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import type { ActivityType } from '@/types/ActivityType';
import type { BlockTemplateType } from '@/types/BlockTemplateType'

const route = useRoute()

const toast = useToast();
const activities = ref<ActivityType[]>([]);

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
  blockData.imageSrc = "../src/assets/photos/contact/a%20residence%20(16).jpg"
}

const generateAdvancedData = (id: number) => {
  let prefixImg = ""

  blockData.title = activities.value[id - 1].headerTitle
  blockData.paragraph = activities.value[id - 1].headerDescription

  if (activities.value[id - 1].pictures.split("/")[0] === "src") prefixImg = "../"
  blockData.imageSrc = prefixImg + activities.value[id - 1].pictures
}

const loadBlockData = (id: number) => {
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
});
</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph" :image-src="blockData.imageSrc" />
  <AllActivities v-if="isAllActivities()" :activities :isAllActivityView="true" />
</template>