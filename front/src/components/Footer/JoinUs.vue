<script setup lang="ts">
import { useResidenceStore } from '@/store/ResidenceStore';
import { storeToRefs } from 'pinia';

const { residences  } = storeToRefs(useResidenceStore());
</script>

<template>
    <div class="flex">
        <div class="flex flex-col">
            <h4 class="text-[16px] font-semibold mb-[15px]">Nous joindre</h4>
            <li class="flex">
                <img src="@/assets/icons/home.svg" alt="home">
                <p class="text-[16px] ml-[13px]">{{ residences.postalAddress }}</p>
            </li>
            <li class="flex">
                <img src="@/assets/icons/phone.svg" alt="phone">
                <p class="text-[16px] ml-[13px]">{{ residences.phone }}</p>
            </li>
            <li class="flex">
                <img src="@/assets/icons/mail.svg" alt="mail">
                <p class="text-[16px] ml-[13px]">{{ residences.email }}</p>
            </li>
        </div>
    </div>
</template>