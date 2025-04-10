<script setup lang="ts">
import { useResidenceStore } from '@/store/ResidenceStore';
import { storeToRefs } from 'pinia';

const { facebook, instagram  } = storeToRefs(useResidenceStore());
</script>

<template>
    <div class="flex">
        <div class="flex flex-col max-[1170px]:items-center">
            <h4 class="text-[16px] font-semibold mb-[15px]">Nous trouver</h4>
            <a :href="facebook" target="_blank">
                <li class="flex">
                    <img loading="lazy" src="@/assets/icons/facebook.svg" alt="facebook icon">
                    <p class="text-[16px] ml-[13px] hover:border-b-[1px] hover:cursor-pointer border-[black] inline-block">Facebook</p>
                </li>
            </a>
            <a :href="instagram" target="_blank">
                <li class="flex">
                    <img loading="lazy" src="@/assets/icons/instagram.svg" alt="instagram icon">
                    <p class="text-[16px] ml-[13px] hover:border-b-[1px] hover:cursor-pointer border-[black] inline-block">Instagram</p>
                </li>
            </a>
        </div>
    </div>
</template>