<script setup lang="ts">
import type { HouseType } from '@/types/HouseType';

const props = defineProps<{
    houseData: HouseType | undefined;
}>();

const getFormattedTitle = (title?: string): string => {
    if (!title) return '';

    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const firstLetter = title.charAt(0).toLowerCase();
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    const article = vowels.includes(firstLetter) ? "l'" : "le ";

    return `${article}${capitalizedTitle}`;
};
</script>

<template>
    <div class="mt-[20px]">
        <div class="w-[380px] rounded-[10px] bg-green-light py-[45px] px-[35px]">
            <h3 class="font-mistress text-[40px] pb-[30px]">Découvrez {{ getFormattedTitle(houseData?.title) }}</h3>
            <p>Et sit nihil nemo et non. Quam iure exercitationem officiis ad consequatur quia. Omnis accusamus veniam et perspiciatis est ullam repellendus officiis vitae. Omnis alias nisi ab quidem ullam asperiores. Quisquam harum exercitationem dolor assumenda qui tenetur.</p>
        </div>

        <div class="w-[500px] rounded-[10px] py-[45px] px-[35px] m-[30px] border border-[#89B58C]">
            <h3 class="font-mistress text-[40px] pb-[30px]">Caractéristiques</h3>
            <div class="flex justify-between">
                <div>
                    <div class="flex items-center my-[16px]">
                        <img src="/src/assets/icons/double_bed.svg" alt="bed icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">{{ houseData?.bed }} lit{{ Number(houseData?.bed) > 1 ? 's' : '' }} ({{ houseData?.capacityMax }} place{{ Number(houseData?.capacityMax) > 1 ? 's' : '' }})</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.kitchen) > 0">
                        <img src="/src/assets/icons/fridge.svg" alt="kitchen icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">Cuisine équipée</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.wifi) > 0">
                        <img src="/src/assets/icons/wifi.svg" alt="wifi icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">Wifi gratuit</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.ac) > 0">
                        <img src="/src/assets/icons/ac.svg" alt="ac icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">Climatisation</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.room) > 0">
                        <img src="/src/assets/icons/room.svg" alt="room icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">{{ houseData?.room }} Pièce{{ Number(houseData?.room) > 1 ? 's' : '' }}</p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.terrace) > 0">
                        <img src="/src/assets/icons/terrace.svg" alt="terrace icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">Terrasse</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.wifi) > 0">
                        <img src="/src/assets/icons/bbq.svg" alt="wifi icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">Wifi gratuit</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.parking) > 0">
                        <img src="/src/assets/icons/parking.svg" alt="parking icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">Place de parking</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.bathroom) > 0">
                        <img src="/src/assets/icons/bathroom.svg" alt="bathroom icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">{{ houseData?.bathroom }} Salle de bain{{ Number(houseData?.bathroom) > 1 ? 's' : '' }}</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.canapeLit) > 0">
                        <img src="/src/assets/icons/sofa.svg" alt="sofa icon" class="w-[30px] h-[30px] inline-block" />
                        <p class="ml-[20px]">{{ houseData?.canapeLit }} Canapé{{ Number(houseData?.canapeLit) > 1 ? 's' : '' }}-lit{{ Number(houseData?.canapeLit) > 1 ? 's' : '' }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-[325px] rounded-[10px] py-[45px] px-[35px] items-start">
            <h3 class="font-mistress text-[40px] pb-[30px]">Tarifs</h3>
            <h4 class="font-light italic">Pour une semaine</h4>
            <table class="w-full border-separate border-spacing-y-2">
                <tr>
                    <td>Avril, Mai & Octobre</td>
                    <td>{{ houseData?.price[0].lowSeason }}€</td>
                </tr>
                <tr>
                    <td>Juin & Septembre</td>
                    <td>{{ houseData?.price[0].mediumSeason }}€</td>
                </tr>
                <tr>
                    <td>01/07 - 27/07</td>
                    <td>{{ houseData?.price[0].highSeason }}€</td>
                </tr>
                <tr>
                    <td>28/07 - 24/08</td>
                    <td>{{ houseData?.price[0].veryHighSeason }}€</td>
                </tr>
                <tr>
                    <td>Ménage</td>
                    <td>{{ houseData?.price[0].cleaningFee }}€</td>
                </tr>
            </table>
        </div>
    </div>
</template>