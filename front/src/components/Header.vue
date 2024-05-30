<script setup lang="ts">
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';
import Dropdown from 'primevue/dropdown';
import { ref } from 'vue';

const discoverItems = ref([
    { label: 'Découvrir', icon: 'pi pi-fw pi-search' },
    { label: 'Activités', icon: 'pi pi-fw pi-calendar' },
    { label: 'Tarifs', icon: 'pi pi-fw pi-money-bill' },
    { label: 'Contact', icon: 'pi pi-fw pi-envelope' }
]);

const selectedItem = ref(null);
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
                Activités
            </li>
            <li class="ml-[25px]">
                <RouterLink to="/tarifs">Tarifs</RouterLink>
                <Dropdown v-model="selectedItem" :options="discoverItems" optionLabel="activity" placeholder="Select an Item" class="w-full md:w-14rem" />

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