<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const activities = ref([]);

const loadActivities = async () => {
    try {
        const response = await axios.get('http://localhost:8002/activities');
        activities.value = response.data;
        console.log('activities,', activities.value)
    } catch (error) {
        console.error(error);
    }
};

onMounted(async () => {
    await loadActivities();
});

const selectedActivity = ref(null);
</script>

<template>
    <header class="bg-black bg-opacity-40 text-white flex justify-between items-center my-[32px] py-[18px] px-[31px] rounded-xl absolute w-[90%] left-1/2 transform -translate-x-1/2">
        <img src="@/assets/logo/logo-header.svg" alt="logo" />
        <div class="flex items-center">
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li class="ml-[25px]">
                Découvrir
            </li>
            <li class="ml-[25px]">
                <Dropdown v-model="selectedActivity" :options="activities" optionLabel="headerTitle" placeholder="Activités" class="w-full md:w-14rem" />
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