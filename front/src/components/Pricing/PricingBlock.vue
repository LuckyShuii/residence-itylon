<script setup lang="ts">
const props = defineProps<{
    season: string;
    dates: string;
    pricesWithHouseName: {houseName: string, price: number}[];
}>();

</script>

<template>
    <div class="w-[385px] px-[25px] py-[25px]">
        <div class="flex justify-between items-end mb-2">
            <h3 class="font-mistress text-[35px]">{{ season }}</h3>
            <h3 class="mb-2">{{ dates ? '(' + dates + ')' : '' }}</h3>
        </div>
        <table class="w-full border-separate border-spacing-y-2">
            <tbody>
                <tr v-for="house in pricesWithHouseName" :key="house.houseName">
                <td class="text-xl">{{ house.houseName }}</td>
                <td class="text-end text-xl">{{ house.price }}€</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>