<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import type { ActivityType } from '@/types/ActivityType';
import ActivityCard from '@/components/ActivityCard.vue';

const toast = useToast();
const activities = ref<ActivityType[]>([]);

const loadActivities = async () => {
    try {
        activities.value = (await axios.get('http://localhost:8002/activities')).data;
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement des activités', life: 6000 });
    }
};

onMounted(async () => {
    await loadActivities();
});
</script>

<template>
    <div class="flex justify-center mt-[80px]">
        <div class="px-[85px] pb-[90px] flex items-center justify-center max-w-[1440px] w-full flex-col">
            <h2 class="font-mistress text-[45px] mb-[60px]">Des activités pour tous les goûts</h2>
            <div class="flex">
                <ActivityCard v-for="activity in activities" :key="activity.id" :activity="activity" class="ml-[28px] flex justify-center" />
            </div>
        </div>
    </div>
</template>