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
    <div class="mt-[20px] max-[1380px]:flex-col max-[1380px]:px-6 max-[1380px]:w-full">
        <div class="max-w-[380px] h-full rounded-[10px] bg-green-light py-[45px] px-[35px] max-[1380px]:max-w-full">
            <h3 class="font-mistress text-[40px] pb-[30px]">
                Découvrez {{ getFormattedTitle(houseData?.title) }}
            </h3>
            <p>{{ houseData?.description }}.</p>
        </div>

        <div class="w-[500px] rounded-[10px] py-[45px] px-[35px] m-[30px] border border-[#89B58C] max-[1380px]:max-w-full max-[1380px]:w-full max-[1380px]:mx-0">
            <h3 class="font-mistress text-[40px] pb-[30px] max-[1380px]:text-center">
                Caractéristiques
            </h3>
            <div class="flex justify-between max-[1380px]:justify-center">
                <div class="max-[1380px]:mr-8">
                    <div class="flex items-center my-[16px]">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/double_bed.svg"
                            alt="bed icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">
                            {{ houseData?.bed }} lit{{ Number(houseData?.bed) > 1 ? 's' : '' }}
                        </p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.kitchen) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/fridge.svg"
                            alt="kitchen icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">Cuisine équipée</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.wifi) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/wifi.svg"
                            alt="wifi icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">Wifi gratuit</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.ac) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/ac.svg"
                            alt="ac icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">Climatisation</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.room) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/room.svg"
                            alt="room icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">
                            {{ houseData?.room }} Chambre{{ Number(houseData?.room) > 1 ? 's' : '' }}
                        </p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.terrace) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/terrace.svg"
                            alt="terrace icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">Terrasse</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.barbecue) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/bbq.svg"
                            alt="wifi icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">Barbecue</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.parking) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/parking.svg"
                            alt="parking icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">Place de parking</p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.bathroom) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/bathroom.svg"
                            alt="bathroom icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">
                            {{ houseData?.bathroom }} Salle de bain{{ Number(houseData?.bathroom) > 1 ? 's' : '' }}
                        </p>
                    </div>
                    <div class="flex items-center my-[16px]" v-if="houseData && Number(houseData?.canapeLit) > 0">
                        <img
                            loading="lazy"
                            src="/src/assets/icons/sofa.svg"
                            alt="sofa icon"
                            class="w-[30px] h-[30px] inline-block max-[700px]:w-[25px] max-[700px]:h-[25px]"
                        />
                        <p class="ml-[20px]">
                            {{ houseData?.canapeLit }} Canapé{{ Number(houseData?.canapeLit) > 1 ? 's' : '' }}-lit{{ Number(houseData?.canapeLit) > 1 ? 's' : '' }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-[325px] rounded-[10px] py-[45px] px-[35px] items-start max-[1380px]:max-w-full max-[1380px]:w-full max-[1380px]:mx-0 max-[1380px]:items-center max-[1380px]:flex max-[1380px]:flex-col">
            <h3 class="font-mistress text-[40px] pb-[30px]">Tarifs</h3>
            <h4 class="font-light italic">Pour une semaine</h4>
            <table class="w-full border-separate border-spacing-y-4 max-[1380px]:w-[15rem]">
                <tbody>
                    <tr>
                        <td>Avril, Mai & Octobre</td>
                        <td class="max-[1380px]:text-end">
                            {{ houseData?.price[0].lowSeason }}€
                        </td>
                    </tr>
                    <tr>
                        <td>Juin & Septembre</td>
                        <td class="max-[1380px]:text-end">
                            {{ houseData?.price[0].mediumSeason }}€
                        </td>
                    </tr>
                    <tr>
                        <td>01/07 - 27/07</td>
                        <td class="max-[1380px]:text-end">
                            {{ houseData?.price[0].highSeason }}€
                        </td>
                    </tr>
                    <tr>
                        <td>28/07 - 24/08</td>
                        <td class="max-[1380px]:text-end">
                            {{ houseData?.price[0].veryHighSeason }}€
                        </td>
                    </tr>
                    <tr>
                        <td>Ménage</td>
                        <td class="max-[1380px]:text-end">
                            {{ houseData?.price[0].cleaningFee }}€
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
