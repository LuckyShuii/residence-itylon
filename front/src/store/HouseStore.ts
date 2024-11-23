import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ResidenceType } from "@/types/ResidenceType";
import { useToast } from "primevue/usetoast";

export const useHouseStore = defineStore('house', () => {
    const test = ref("test")
    const toast = useToast()
    /**
     * goal:
     * determine the current season based on the current date
     * store the current season in order to have the correct prices for the houses
     */

    const loadHouses = async () => {
        try {
            const response = await axios.get<string>(`http://localhost:8002/houses}`);
            console.log(response);
        } catch (err) {
            toast.add({ severity: 'error', summary: 'Error', detail: 'An error occurred while getting the house price' });
        }
    }

    return { test, getHousePrice }
});