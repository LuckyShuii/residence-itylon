import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { ResidenceType } from "@/types/ResidenceType";
import { useToast } from "primevue/usetoast";

export const useResidenceStore = defineStore('residence', () => {
    const toast = useToast();
    const residences = ref<ResidenceType>({} as ResidenceType);
    const facebook = ref<string>('');
    const instagram = ref<string>('');

    const loadResidences = async () => {
        try {
            const response = await axios.get<ResidenceType[]>('http://localhost:8002/residences');
            residences.value = response.data[0];
            loadSocials();
        } catch (error) {
            toast.add({ severity: 'error', summary: 'Error', detail: 'An error occurred while loading the residence information' });
        }
    }

    const loadSocials = () => {
        const socials = residences.value.socials.split(", ");
        facebook.value = socials[0];
        instagram.value = socials[1];
    }

    return {
        residences,
        loadResidences,
        facebook,
        instagram,
        loadSocials
    }
});