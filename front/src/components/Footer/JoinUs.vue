<script setup lang="ts">
import { useResidenceStore } from '@/store/ResidenceStore';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const { residences  } = storeToRefs(useResidenceStore());
const { loadResidences } = useResidenceStore();

onMounted(async () => {
    await loadResidences();
});
</script>

<template>
    <div class="flex">
        <div class="flex flex-col">
            <h4 class="font-semibold mb-[15px]">Nous joindre</h4>
            <li class="flex">
                <img src="@/assets/icons/home.svg" alt="home">
                <p class="ml-[13px] hover:border-b-[1px] hover:cursor-pointer border-[black] inline-block">{{ residences.postalAddress }}</p>
            </li>
            <li class="flex">
                <img src="@/assets/icons/phone.svg" alt="phone">
                <p class="ml-[13px] hover:border-b-[1px] hover:cursor-pointer border-[black] inline-block">{{ residences.phone }}</p>
            </li>
            <li class="flex">
                <img src="@/assets/icons/mail.svg" alt="mail">
                <p class="ml-[13px] hover:border-b-[1px] hover:cursor-pointer border-[black] inline-block">{{ residences.email }}</p>
            </li>
        </div>
    </div>
</template>