<script setup lang="ts">
import {useResidenceStore} from "@/store/ResidenceStore";
import {storeToRefs} from "pinia";

const { residences } = storeToRefs(useResidenceStore())
</script>

<template>
  <div class="w-full max-w-[545px] min-[1450px]:mt-[80px] min-[1450px]:ml-[100px] mb-[70px]">
    <h2 class="font-mistress text-[46px] m-0">Informations pratiques</h2>
    <div class="pl-[25px] flex items-center mt-[35px] max-w-[545px] min-h-[65px] bg-green-light rounded-[10px] mb-[30px]">
      <img src="@/assets/icons/home.svg" alt="home" class="w-[20px] mr-[23px]">
      <p class="m-O">{{residences.postalAddress}}</p>
    </div>
    <div class="pl-[25px] flex items-center max-w-[545px] min-h-[65px] bg-green-light rounded-[10px] mb-[30px]">
      <img src="@/assets/icons/mail.svg" alt="home" class="w-[20px] mr-[23px]">
      <p class="m-O">{{residences.email}}</p>
    </div>
    <div class="pl-[25px] flex items-center max-w-[545px] min-h-[65px] bg-green-light rounded-[10px]">
      <img src="@/assets/icons/phone.svg" alt="home" class="w-[20px] mr-[23px]">
      <p class="m-O">{{residences.phone}}</p>
    </div>
  </div>
</template>