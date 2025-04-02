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
        activities.value = (await axios.get(`${import.meta.env.VITE_BACKEND_URL}/activities`)).data;
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement des activités', life: 6000 });
    }
};

onMounted(async () => {
    await loadActivities();
});
</script>

<template>
    <div class="flex justify-center mt-[80px] max-[980px]:w-full">
        <div class="px-[85px] pb-[90px] flex items-center justify-center max-w-[1480px] w-full flex-col max-[980px]:w-[90%] max-[980px]:px-0 max-[980px]:min-w-[16rem]">
            <h2 class="font-mistress text-[45px] mb-[60px] max-[980px]:w-full max-[980px]:text-center">Des activités pour tous les goûts</h2>
            <div class="flex flex-wrap justify-center gap-4 max-[980px]:w-full">
                <ActivityCard v-for="activity in activities" :key="activity.id" :activity="activity" class="flex justify-center" />
            </div>
        </div>
    </div>
</template>