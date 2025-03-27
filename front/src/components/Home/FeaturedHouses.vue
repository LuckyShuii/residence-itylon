<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import FeaturedHouse from '@/components/Home/Houses/FeaturedHouse.vue';
import type { HouseType } from '@/types/HouseType';

const featuredHouses = ref<{ firstHouse: HouseType | null, secondHouse: HouseType | null }>({ firstHouse: null, secondHouse: null });
const toast = useToast();

const loadFeaturedHouses = async () => {
    await loadFirstHouse();
    await loadSecondHouses();
};

const loadFirstHouse = async () => {
    try {
        const firstHouse = (await axios.get('http://localhost:8002/house/8')).data;
        firstHouse.title = firstHouse.title.charAt(0).toUpperCase() + firstHouse.title.slice(1);
        featuredHouses.value = { ...featuredHouses.value, firstHouse };
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement de la première maison', life: 6000 });
    }
};

const loadSecondHouses = async () => {
    try {
        const secondHouse = (await axios.get('http://localhost:8002/house/12')).data;
        secondHouse.title = secondHouse.title.charAt(0).toUpperCase() + secondHouse.title.slice(1);
        featuredHouses.value = { ...featuredHouses.value, secondHouse };
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement de la deuxième maison', life: 6000 });
    }
};

onMounted(async () => {
    await loadFeaturedHouses();
});
</script>

<template>
    <div class="bg-green-light flex justify-center max-[980px]:w-full">
        <div class="px-[85px] py-[90px] flex items-center justify-between max-w-[1440px] w-full max-[1380px]:justify-around max-[980px]:flex-col max-[980px]:w-[90%] max-[980px]:px-0">
            <div class="w-[325px] flex flex-col max-[980px]:items-center max-[980px]:w-full max-[980px]:min-w-[16rem]">
                <h2 class="font-mistress text-[46px] max-[980px]:text-center">Trouvez la maison parfaite pour vos vacances</h2>
                <p class="mb-[28px] mt-[40px] w-[385px] max-[980px]:w-[90%] max-[980px]:text-center">Velit repudiandae amet maiores amet voluptatibus itaque ullam praesentium. Vero cupiditate molestiae sequi quo voluptatibus nostrum minus.</p>
                <RouterLink to="/decouvrir/les-maisons">
                    <Button label="En savoir plus" class="w-[160px] h-[46px]" />
                </RouterLink>
            </div>
            <div class="flex max-[1380px]:flex-col" v-if="featuredHouses.firstHouse && featuredHouses.secondHouse">
              <FeaturedHouse v-for="house in featuredHouses" :key="house!.id" :house="house!" class="max-[1380px]:mb-4 max-[980px]:mx-0 max-[980px]:mt-12" :displayPrice="false" />
            </div>
        </div>
    </div>
</template>