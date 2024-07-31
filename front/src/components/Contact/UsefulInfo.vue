<script setup lang="ts">
import {useResidenceStore} from "@/store/ResidenceStore";
import {storeToRefs} from "pinia";

const { residences } = storeToRefs(useResidenceStore())
</script>

<template>
  <div class="w-[545px] mt-[80px] ml-[100px] mb-[70px]">
    <h2 class="font-mistress text-[46px] mb-[37px]">Informations pratiques</h2>
    <div class="pl-[25px] flex items-center w-[545px] h-[78px] bg-green-btn-light mb-[30px]">
      <img src="@/assets/icons/home.svg" alt="home" class="w-[20px] mr-[23px]">
      <p>{{residences.postalAddress}}</p>
    </div>
    <div class="pl-[25px] flex items-center w-[545px] h-[78px] bg-green-btn-light mb-[30px]">
      <img src="@/assets/icons/mail.svg" alt="home" class="w-[20px] mr-[23px]">
      <p>{{residences.email}}</p>
    </div>
    <div class="pl-[25px] flex items-center w-[545px] h-[78px] bg-green-btn-light">
      <img src="@/assets/icons/phone.svg" alt="home" class="w-[20px] mr-[23px]">
      <p>{{residences.phone}}</p>
    </div>
  </div>
</template>