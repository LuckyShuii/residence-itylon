<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const heroContainer = document.getElementById('hero-container');
    setTimeout(() => {
        if (heroContainer) {
            heroContainer.classList.remove('opacity-0');
            heroContainer.classList.add('opacity-100');
        }
    }, 250);
});
</script>

<template>
    <div id="hero-container" class="relative h-screen overflow-hidden opacity-0 transition-opacity duration-500">
        <video class="absolute top-0 left-0 z-0 w-full h-full object-cover" autoplay muted loop>
            <source src="https://www.residence-itylon.com/media/videos/Vid%C3%A9o%20sans%20titre%20%E2%80%93%20R%C3%A9alis%C3%A9e%20avec%20Clipchamp%20(1).mp4" type="video/mp4">
        </video>
        <div class="relative z-10 flex items-center flex-col justify-center h-full text-center">
            <img src="@/assets/logo/logo-hero.svg" alt="logo" class="mx-auto" />
            <Button class="mt-4 w-[172px] h-[46px] flex justify-center">Découvrir</Button>
        </div>
        <img src="@/assets/icons/down-arrow.svg" alt="arrow-down" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[100px]" />
    </div>
</template>