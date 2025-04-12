<script setup lang="ts">
import { useResidenceStore } from '@/store/ResidenceStore';
import { storeToRefs } from 'pinia';

const { residences  } = storeToRefs(useResidenceStore());
</script>

<template>
    <div class="flex">
        <div class="flex flex-col max-[1170px]:items-center">
            <h4 class="text-[16px] font-semibold mb-[15px]">Nous joindre</h4>
            <li class="flex">
                <img loading="lazy" src="@/assets/icons/home.svg" alt="home">
                <p class="text-[16px] ml-[13px] !text-center hover:border-b-[1px] border-[black]"><a href="https://www.google.com/maps/place/R%C3%A9sidence+Itylon/@42.1363965,8.6169634,17z/data=!3m1!4b1!4m6!3m5!1s0x12da7a32f6062971:0x168704a8aad44050!8m2!3d42.1363926!4d8.6195383!16s%2Fg%2F1tdv3d7d?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank">{{ residences.postalAddress }}</a></p>
            </li>
            <li class="flex">
                <img loading="lazy" src="@/assets/icons/phone.svg" alt="phone">
                <p class="text-[16px] ml-[13px] hover:border-b-[1px] border-[black]"><a :href="`tel:${residences.phone}`">{{ residences.phone }}</a></p>
            </li>
            <li class="flex">
                <img loading="lazy" src="@/assets/icons/mail.svg" alt="mail">
                <p class="text-[16px] ml-[13px] hover:border-b-[1px] border-[black]"><a :href="`mailto:${residences.email}`">{{ residences.email }}</a></p>
            </li>
        </div>
    </div>
</template>