<script setup lang="ts">
import { ref, onMounted, reactive, watch, nextTick } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useRoute } from 'vue-router';
import AllActivities from "@/components/Activities/AllActivities.vue";
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import Activity from "@/components/Activities/Activity.vue";
import type { ActivityType } from '@/types/ActivityType';
import type { BlockTemplateType } from '@/types/BlockTemplateType';

const route = useRoute();

const toast = useToast();
const activities = ref<ActivityType[]>([]);
const activityPictures = ref<string[]>([]);
const activityContainer = ref<HTMLElement | null>(null);

interface ActivityDetail {
  title: string;
  description: string;
  externalLink: string;
}

const activityDetailData = reactive<ActivityDetail>({
  title: '',
  description: '',
  externalLink: ''
});

const blockData = reactive<BlockTemplateType>({
  title: 'Les activités',
  paragraph: 'Voluptate vitae quo maxime asperiores. Mollitia iusto qui nemo deserunt magni aut reiciendis consequuntur. Accusantium sunt ducimus assumenda. Praesentium est laborum numquam repellendus',
  imageSrc: 'photos/activities/plage.webp'
});

const loadActivities = async () => {
  try {
    activities.value = (await axios.get(`${import.meta.env.VITE_BACKEND_URL}/activities`)).data;
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement des activités', life: 6000 });
  }
};

const generateBasicBlockData = () => {
  blockData.title = "Les activités";
  blockData.paragraph = "À seulement quelques minutes à pied de la mer, c’est l’endroit idéal pour se ressourcer loin de l’agitation. Vous pourrez profiter de nombreuses activités : baignade, balades en bateau, randonnées en pleine nature, ou encore promenades à cheval… Il y en a pour tous les goûts !";
  blockData.imageSrc = "photos/activities/plage.webp";
};

const generateImgSrc = (img: string): string => {
  return '../' + img;
};

const generateActivityPictures = (images: string): void => {
  activityPictures.value = images.split(',');
  activityPictures.value.pop();
  activityPictures.value = activityPictures.value.map((element) => {
    if (element.split('/')[0] === 'photos') {

      return '/' + element;
    }
    return '';
  }).filter((element) => element !== '');
};

const generateAdvancedData = (id: number): void => {
  let currentActivity = activities.value[id - 1];
  blockData.title = currentActivity.headerTitle;
  blockData.paragraph = currentActivity.headerDescription;
  blockData.imageSrc = generateImgSrc(currentActivity.pictures.split(",")[0]);
  activityDetailData.title = currentActivity.title;
  activityDetailData.description = currentActivity.description;
  generateActivityPictures(currentActivity.pictures);
};

const loadBlockData = (id: number): void => {
  if (id === 0) generateBasicBlockData();
  if (id > 0) generateAdvancedData(id);
};

const isAllActivities = () => route.query.a === '0';

watch(
    () => route.query,
    async () => {
      if (activities.value.length === 0) await loadActivities();

      if (activityContainer.value) {
        activityContainer.value.classList.remove('opacity-100');
        activityContainer.value.classList.add('opacity-0');
      }

      setTimeout(async () => {
        let routerValue = route.query.a;
        if (routerValue && typeof routerValue === 'string') {
          loadBlockData(parseInt(routerValue));
        }
        await nextTick();

        setTimeout(() => {
          if (activityContainer.value) {
            activityContainer.value.classList.remove('opacity-0');
            activityContainer.value.classList.add('opacity-100');
          }
        }, 250);
      }, 300);
    },
    { immediate: true }
);

onMounted(async () => {
  await loadActivities();
});
</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph ?? 'not found'" :image-src="blockData.imageSrc" />
  <AllActivities :activities="activities" :isAllActivityView="true" />
  <hr class="border-0 h-[1px] w-full border-t-2 block mt-[-1rem]" v-if="!isAllActivities()">
  <div ref="activityContainer" class="w-full flex justify-center items-center opacity-0 transition-opacity duration-500" v-if="!isAllActivities()">
    <Activity :pictures="activityPictures" :title="activityDetailData.title" :description="activityDetailData.description" :external-link="activityDetailData.externalLink" />
  </div>
</template>
