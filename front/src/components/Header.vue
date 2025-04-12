<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Slugify from 'slugify';
import router from '@/router';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const items = [
    { label: 'Accueil', icon: 'pi pi-fw pi-home', to: '/' },
    { label: 'Résidence', icon: 'pi pi-fw pi-search', to: '/decouvrir/la-residence' },
    { label: 'Maisons', icon: 'pi pi-fw pi-search', to: '/decouvrir/les-maisons' },
    { label: 'Alentours', icon: 'pi pi-fw pi-calendar', to: '/activites/toutes-les-activites?a=0' },
    { label: 'Tarifs', icon: 'pi pi-fw pi-money-bill', to: '/tarifs' },
    { label: 'Contact', icon: 'pi pi-fw pi-envelope', to: '/contact' },
];
const menu = ref();

const activities = ref<any>([]);
const selectedActivity = ref(null);

const loadActivities = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/activities`);
        activities.value = [{id: 0, headerTitle: "Toutes les activités"}, ...response.data];
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue lors du chargement des activités', life: 6000 });
    }
};

const resetDropdown = (event: any) => {
    let toRoute = '/';

    if (event.value?.name) {
        toRoute += "decouvrir/" + Slugify((event.value.name as string).toLowerCase());
    } else if (event.value?.headerTitle) {
        toRoute += "activites/" + Slugify((event.value.headerTitle as string).toLowerCase()) + "?a=" + event.value.id;
    } else {
        return;
    }

    reRoute(toRoute);
    resetSelectedActivity();
};


const resetSelectedActivity = () => {
    selectedActivity.value = null;
};

const reRoute = (route: string) => {
    router.push(route);
};

const toggle = (event: Event) => {
    menu.value.toggle(event);
};

onMounted(async () => {
    await loadActivities();
});

</script>

<template>
    <header class="max-w-[1272px] bg-black bg-opacity-70 text-white flex justify-between items-center my-[32px] py-[18px] px-[31px] rounded-[10px] absolute w-[95%] left-1/2 transform -translate-x-1/2 z-20">
        <RouterLink to="/">
            <img loading="lazy" src="@/assets/logo/logo-header.svg" alt="logo" class="w-[220px] m-[-1.3rem] p-0"/>
        </RouterLink>
        <div class="flex items-center xl:flex max-md:hidden">
            <li class="hover:border-b-2 hover:border-white">
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li class="ml-[25px] hover:border-b-2 hover:border-white">
                <RouterLink to="/decouvrir/la-residence">Résidence</RouterLink>
            </li>
            <li class="ml-[25px] mr-4 hover:border-b-2 hover:border-white">
                <RouterLink to="/decouvrir/les-maisons">Maisons</RouterLink>
            </li>
            <li>
                <Dropdown v-model="selectedActivity" :options="activities" optionLabel="headerTitle" placeholder="Alentours" class="w-full md:w-14rem" @change="resetDropdown"/>
            </li>
            <li class="hover:border-b-2 hover:border-white">
                <RouterLink to="/tarifs">Tarifs</RouterLink>
            </li>   
            <li>
                <RouterLink to="/contact?">
                    <Button class="ml-[25px] w-[100px] h-[42px] flex justify-center">Contact</Button>
                </RouterLink>
            </li>
        </div>
        <div class="md:hidden card flex justify-center h-[3.5rem]">
            <Button type="button" icon="pi pi-bars" @click="toggle" class="bg-transparent w-[5rem]" />
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
              <template #item="{ item }">
                <RouterLink :to='item.to'>
                  {{item.label}}
                </RouterLink>
              </template>
            </Menu>
        </div>
    </header>
</template>