import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useToast } from "primevue/usetoast";
import type { HouseType } from "@/types/HouseType";

export const useHouseStore = defineStore("house", () => {
    const toast = useToast();
    const allHouses = ref<HouseType[] | undefined>([]);
    const housesPricing = ref();

    const houses = computed(() => {
        if (!allHouses.value) return [];
        
        return [...allHouses.value].sort((a, b) => {
          // Utilisation de capacityMin pour le tri
          const capacityA = a.capacityMin;
          const capacityB = b.capacityMin;
          
          return capacityA - capacityB;
        });
      });

    const loadHouses = async () => {
        try {
            allHouses.value = (
                await axios.get<HouseType[]>(`${import.meta.env.VITE_BACKEND_URL}/houses`)
            ).data;
        } catch (err) {
            toast.add({
                severity: "error",
                summary: "Error",
                detail: "An error occurred while getting the house data",
            });
        }
    };

    const getHousesPricing = async () => {
        try {
            housesPricing.value = (await axios.get(`${import.meta.env.VITE_BACKEND_URL}/prices/houses`)).data;
        } catch (error) {
            toast.add({
                severity: "error",
                summary: "Error",
                detail: "An error occurred while getting the house pricing data",
            });
        }
    }   

    return { loadHouses, houses, getHousesPricing, housesPricing };
});