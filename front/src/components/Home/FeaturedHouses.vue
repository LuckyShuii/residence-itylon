<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';

const featuredHouses = ref({});
const toast = useToast();

const loadFeaturedHouses = async () => {
    await loadFirstHouse();
    await loadSecondHouses();
};

const loadFirstHouse = async () => {
    try {
        const firstHouse = (await axios.get('http://localhost:8002/house/8')).data;
        featuredHouses.value = { ...featuredHouses.value, firstHouse };
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement de la première maison', life: 6000 });
    }
};

const loadSecondHouses = async () => {
    try {
        const secondHouse = (await axios.get('http://localhost:8002/house/12')).data;
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
<pre>{{ featuredHouses }}</pre>
</template>