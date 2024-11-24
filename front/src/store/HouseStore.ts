import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useToast } from "primevue/usetoast";
import type { HouseType } from "@/types/HouseType";

export const useHouseStore = defineStore("house", () => {
    const toast = useToast();
    const allHouses = ref<HouseType[] | undefined>([]);

    const houses = computed(() => {
        if (!allHouses.value) return [];

        return [...allHouses.value].sort((a, b) => {
            const capacityA =
                typeof a.capacity === "string"
                    ? parseInt(a.capacity.split(" ")[0])
                    : a.capacity;
            const capacityB =
                typeof b.capacity === "string"
                    ? parseInt(b.capacity.split(" ")[0])
                    : b.capacity;

            return capacityA - capacityB;
        });
    });

    const loadHouses = async () => {
        if (!allHouses.value) return;
        try {
            allHouses.value = (
                await axios.get<HouseType[]>(`http://localhost:8002/houses`)
            ).data;
        } catch (err) {
            toast.add({
                severity: "error",
                summary: "Error",
                detail: "An error occurred while getting the house data",
            });
        }
    };

    return { loadHouses, houses };
});
