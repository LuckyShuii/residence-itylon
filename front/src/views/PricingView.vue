<script setup lang="ts">
import TopImageBlock from '@/components/layout/TopImageBlock.vue';
import PricingBlock from '@/components/Pricing/PricingBlock.vue';
import type { BlockTemplateType } from '@/types/BlockTemplateType';
import { reactive } from 'vue';

const blockData = reactive<BlockTemplateType>({
  title: `Tarifs 2026`,
  paragraph: 'Nos tarifs sont indiqués à la semaine. Les séjours plus courts ou plus longs sont recalculés sur la base du tarif hebdomadaire. Merci de nous signaler impérativement la présence d’animaux de compagnie lors de votre réservation.',
  imageSrc: 'webp/contact/a%20residence%20(16).webp'
});

const pricingImageSrc = 'webp/pricing/tarif-2026.svg';
const pricingImageAlt = 'Tableau des tarifs 2026 de la résidence Itylon';

</script>

<template>
    <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph ?? 'not found'" :image-src="blockData.imageSrc" />
    <div class="w-full max-w-[1300px] mx-auto mt-[50px] px-4 sm:px-8">
        <PricingBlock 
            :image-src="pricingImageSrc"
            :alt="pricingImageAlt"
        />
    </div>
</template>
