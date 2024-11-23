<script setup lang="ts">
import type { HouseType} from '@/types/HouseType';
import Slugify from 'slugify';
import { computed } from "vue";

const props = defineProps<{
  house: HouseType;
}>();

const capitalizeFirstLetter = (word: string) => {
  return String(word).charAt(0).toUpperCase() + String(word).slice(1);
}

const lowestPrice = computed(() => {
  const pricesObject = props.house.price[0];
  if (!pricesObject) return null;

  const prices = Object.entries(pricesObject)
      .filter(([key]) => key !== 'id' && key !== 'cleaningFee')
      .map(([_, value]) => value);

  return prices.length > 0 ? Math.min(...prices) : null;
});


</script>

<template>
  <div class="w-[306px] rounded-[20px] flex flex-col bg-green-light">
    <img src="/src/assets/photos/residence/residence_main.jpg" alt="house" class="w-full h-[250px] object-cover rounded-t" />
    <div class="flex flex-col justify-between px-[16px] py-[14px]">
      <h3 class="font-medium">{{ capitalizeFirstLetter(house.title) }} <small class="text-[14px] font-normal">({{ house.capacity }} personnes)</small></h3>
      <div class="flex items-center justify-between">
        <p class="text-[14px]">À partir de {{lowestPrice}}€</p>
        <RouterLink :to="'/les-maison/' + Slugify(house.title.toLowerCase()) + '?h=' + house.id">
          <Button class="w-[110px] h-[30px] text-[14px] flex justify-center">Visiter</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>