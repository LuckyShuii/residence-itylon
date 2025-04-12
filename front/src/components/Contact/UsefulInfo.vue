<script setup lang="ts">
import {useResidenceStore} from "@/store/ResidenceStore";
import {storeToRefs} from "pinia";

const { residences } = storeToRefs(useResidenceStore())
</script>

<template>
  <div class="w-full max-w-[545px] min-[1450px]:mt-[80px] min-[1450px]:ml-[100px] mb-[70px]">
    <h2 class="font-mistress text-[46px] m-0">Informations pratiques</h2>
    <a class="hover:font-bold" href="https://www.google.com/maps/place/R%C3%A9sidence+Itylon/@42.1363965,8.6169634,17z/data=!3m1!4b1!4m6!3m5!1s0x12da7a32f6062971:0x168704a8aad44050!8m2!3d42.1363926!4d8.6195383!16s%2Fg%2F1tdv3d7d?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank"><div class="pl-[25px] flex items-center mt-[35px] max-w-[545px] min-h-[65px] bg-green-light rounded-[10px] mb-[30px]">
      <img loading="lazy" src="@/assets/icons/home.svg" alt="home" class="w-[20px] mr-[23px]">
      <p class="m-O">{{ residences.postalAddress }}</p>
    </div></a>
    <a class="hover:font-bold" :href="`mailto:${residences.email}`"><div class="pl-[25px] flex items-center max-w-[545px] min-h-[65px] bg-green-light rounded-[10px] mb-[30px]">
      <img loading="lazy" src="@/assets/icons/mail.svg" alt="home" class="w-[20px] mr-[23px]">
      <p class="m-O">{{residences.email}}</p>
    </div></a>
    <a class="hover:font-bold" :href="`tel:${residences.phone}`"><div class="pl-[25px] flex items-center max-w-[545px] min-h-[65px] bg-green-light rounded-[10px]">
      <img loading="lazy" src="@/assets/icons/phone.svg" alt="home" class="w-[20px] mr-[23px]">
      <p class="m-O">{{residences.phone}}</p>
    </div></a>
  </div>
</template>