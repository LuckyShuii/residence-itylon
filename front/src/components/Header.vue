<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Slugify from 'slugify';
import router from '@/router';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const activities = ref([]);
const selectedActivity = ref(null);

const discoveries = ref([
    { name: 'Les maisons' },
    { name: 'La résidence' }
]);
const selectedDiscover = ref(null);

const loadActivities = async () => {
    try {
        const response = await axios.get('http://localhost:8002/activities');
        activities.value = response.data;
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement des activités', life: 6000 });
    }
};

const resetDropdown = (event: any) => {
    let toRoute = '/';
    if (event.value.name) {
        toRoute += "decouvrir/" + Slugify((event.value.name as string).toLowerCase());
    }
    if (event.value.headerTitle) {
        toRoute += "activite/" + Slugify((event.value.headerTitle as string).toLowerCase());
    }
    reRoute(toRoute);
    resetSelectedActivity();
    resetSelectedDiscover();
};

const resetSelectedActivity = () => {
    selectedActivity.value = null;
};

const resetSelectedDiscover = () => {
    selectedDiscover.value = null;
};

const reRoute = (route: string) => {
    router.push(route);
};

onMounted(async () => {
    await loadActivities();
});

</script>

<template>
    <header class="bg-black bg-opacity-40 text-white flex justify-between items-center my-[32px] py-[18px] px-[31px] rounded-xl absolute w-[90%] left-1/2 transform -translate-x-1/2">
        <RouterLink to="/">
            <img src="@/assets/logo/logo-header.svg" alt="logo" />
        </RouterLink>
        <div class="flex items-center">
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li class="ml-[25px]">
                <Dropdown v-model="selectedDiscover" :options="discoveries" optionLabel="name" placeholder="Découvrir" class="w-full md:w-14rem" @change="resetDropdown"/>
            </li>
            <li class="ml-[25px]">
                <Dropdown v-model="selectedActivity" :options="activities" optionLabel="headerTitle" placeholder="Activités" class="w-full md:w-14rem" @change="resetDropdown"/>
            </li>
            <li class="ml-[25px]">
                <RouterLink to="/tarifs">Tarifs</RouterLink>
            </li>
            <li class="ml-[25px]">
                <RouterLink to="/contact">Contact</RouterLink>
            </li>
            <li>
                <Button label="Réserver" class="ml-[25px] p-button" />
            </li>
        </div>
    </header>
</template>