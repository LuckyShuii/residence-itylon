<script setup lang="ts">
import { useResidenceStore } from '@/store/ResidenceStore';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const { facebook, instagram  } = storeToRefs(useResidenceStore());
const { loadResidences } = useResidenceStore();

onMounted(async () => {
    await loadResidences();
});
</script>

<template>
    <div class="flex">
        <div class="flex flex-col">
            <h4 class="font-semibold mb-[15px]">Nous trouver</h4>
            <a :href="facebook" target="_blank">
                <li class="flex">
                    <img src="@/assets/icons/facebook.svg" alt="facebook icon">
                    <p class="ml-[13px] hover:border-b-[1px] hover:cursor-pointer border-[black] inline-block">Résidence Itylon</p>
                </li>
            </a>
            <a :href="instagram" target="_blank">
                <li class="flex">
                    <img src="@/assets/icons/instagram.svg" alt="instagram icon">
                    <p class="ml-[13px] hover:border-b-[1px] hover:cursor-pointer border-[black] inline-block">residence insta</p>
                </li>
            </a>
        </div>
    </div>
</template>