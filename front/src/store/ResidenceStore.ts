import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { ResidenceType } from "@/types/ResidenceType";
import { useToast } from "primevue/usetoast";

export const ResidenceStore = defineStore('residence', () => {
    const toast = useToast();
    const residences = ref<ResidenceType[]>([]);

    const loadResidences = async () => {
        try {
            const response = await axios.get<ResidenceType[]>('http://localhost:8002/residences');
            residences.value = response.data;
        } catch (error) {
            toast.add({ severity: 'error', summary: 'Error', detail: 'An error occurred while loading the residence information' });
        }
    }

    return {
        residences,
        loadResidences
    }
});