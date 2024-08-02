<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useRoute } from 'vue-router'
import AllActivities from "@/components/Activities/AllActivities.vue";
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import type { ActivityType } from '@/types/ActivityType';

const route = useRoute()

const toast = useToast();
const activities = ref<ActivityType[]>([]);

const paragraph = ref("Voluptate vitae quo maxime asperiores. Mollitia iusto qui nemo deserunt magni aut reiciendis consequuntur. Accusantium sunt ducimus assumenda. Praesentium est laborum numquam repellendus")

const loadActivities = async () => {
  try {
    activities.value = (await axios.get('http://localhost:8002/activities')).data;
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement des activités', life: 6000 });
  }
};

const getImageSrc = () => {
  return "../src/assets/photos/contact/a%20residence%20(16).jpg"
}

const isAllActivities = () => route.query.a === '0'

onMounted(async () => {
  await loadActivities();
});
</script>

<template>
  <TopImageBlock title="Les activités" :paragraph="paragraph" :image-src="getImageSrc()" />
  <AllActivities v-if="isAllActivities()" :activities :isAllActivityView="true" />
</template>