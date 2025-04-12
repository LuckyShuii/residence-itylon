<script setup lang="ts">
import Pictures from '@/components/Home/LastSection/Pictures.vue'
</script>

<template>
    <div class="flex justify-center bg-green-light py-[30px]">
        <div class="px-[85px] flex items-center justify-between max-w-[1440px] w-full max-[980px]:flex-col max-[980px]:w-[90%] max-[980px]:px-0">
            <div class="flex flex-col justify-center w-[385px] mr-[60px] max-[980px]:w-full max-[980px]:mr-0 max-[980px]:min-w-[16rem] max-[980px]:items-center max-[980px]:mb-12">
                <h2 class="font-mistress text-[45px] mb-[45px] max-[980px]:text-center">Séjourner à Itylon</h2>
                <p class="max-[980px]:text-center">À seulement quelques minutes à pied de la mer, c’est l’endroit idéal pour se ressourcer loin de l’agitation. Vous pourrez profiter de nombreuses activités : baignade, balades en bateau, randonnées en pleine nature, ou encore promenades à cheval… Il y en a pour tous les goûts !</p>
                <RouterLink to="/decouvrir/la-residence">
                    <Button class="mt-[30px] w-[160px] flex justify-center">En savoir plus</Button>
                </RouterLink>
            </div>
            <Pictures />
        </div>
    </div>
</template>