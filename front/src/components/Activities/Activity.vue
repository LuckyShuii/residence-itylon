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
          <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
          <p>{{ description }}</p>
          <a :href="externalLink"><Button class="mt-4 w-[178px] !pl-[1rem]" icon="pi pi-external-link" label="En savoir plus" /></a>
        </div>
      </div>
      <div class="w-[406.44px] h-[346.82px] overflow-hidden rounded-lg">
        <img :src="pictures[1]" alt="Image 1" class="w-full h-full object-cover" />
      </div>
      <div class="w-[366.89px] h-[346.82px] overflow-hidden rounded-lg">
        <img :src="pictures[2]" alt="Image 2" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="flex justify-between mt-[35px]">
      <div class="w-[450.46px] h-[411.63px] overflow-hidden rounded-lg">
        <img :src="pictures[3]" alt="Image 3" class="w-full h-full object-cover" />
      </div>
      <div class="w-[825.87px] h-[411.63px] overflow-hidden rounded-lg">
        <img :src="pictures[4]" alt="Image 4" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>