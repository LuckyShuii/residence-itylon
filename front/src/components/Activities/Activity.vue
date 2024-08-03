<script setup lang="ts">
const props = defineProps<{
  pictures: Array<string>,
  title: string,
  description: string,
  externalLink: string
}>()
</script>

<template>
  <div class="flex flex-col w-[1311.07px] h-[796.45px] mt-[90px]">
    <div class="flex justify-between">
      <div class="bg-white rounded-lg shadow-md flex justify-center items-center w-[466.94px] h-[346.82px] py-[70px] px-[43px]">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-4">La randonnée en Cargèse</h2>
          <p>Ici pareil quelques mots clés et peut être la distance entre la résidence et certains lieux de randonnées. Remplacer les photos par des lieux de randonnées.</p>
          <a :href="externalLink"><Button class="mt-4 w-[178px] !pl-[1rem]" icon="pi pi-external-link" label="En savoir plus" /></a>
        </div>
      </div>
      <div class="bg-cover rounded-lg bg-center" :style="{ backgroundImage: `url(${pictures[1]})`, width: '406.44px', height: '346.82px' }"></div>
      <div class="bg-cover rounded-lg bg-center" :style="{ backgroundImage: `url(${pictures[2]})`, width: '366.89px', height: '346.82px' }"></div>
    </div>
    <div class="flex justify-between mt-[35px]">
      <div class="bg-cover rounded-lg bg-center" :style="{ backgroundImage: `url(${pictures[3]})`, width: '450.46px', height: '411.63px' }"></div>
      <div class="bg-cover rounded-lg object-fit bg-center" :style="{ backgroundImage: `url(${pictures[4]})`, width: '825.87px', height: '411.63px' }"></div>
    </div>
  </div>
</template>