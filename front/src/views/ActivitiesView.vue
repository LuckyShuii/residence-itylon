<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useRoute } from 'vue-router'
import AllActivities from "@/components/Activities/AllActivities.vue";
import type { ActivityType } from '@/types/ActivityType';

const route = useRoute()

const toast = useToast();
const activities = ref<ActivityType[]>([]);

const loadActivities = async () => {
  try {
    activities.value = (await axios.get('http://localhost:8002/activities')).data;
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement des activités', life: 6000 });
  }
};

const isAllActivities = () => route.query.a === '0'

onMounted(async () => {
  await loadActivities();
});
</script>

<template>
  <div class="custom-bg " style="background-image: url('../assets/photos/contact/a%20residence%20(16).jpg');">
    <img src="../assets/photos/contact/a%20residence%20(16).jpg" alt="contact" class="image"/>
  </div>
  {{ $route.params.activity }}
  {{ $route.query.a }}
  {{ isAllActivities() }}
  <AllActivities v-if="isAllActivities()" :activities />
</template>

<style scoped>
.custom-bg {
  width: 100%;
  height: 460px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>