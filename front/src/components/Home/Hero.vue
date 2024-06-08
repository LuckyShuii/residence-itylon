<script setup lang="ts">
</script>

<template>
    <div class="fixed bg-center bg-cover h-screen w-full" :style="{ backgroundImage: 'url(src/assets/hero.png)' }">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
            <img src="@/assets/logo/logo-hero.svg" alt="logo" class="mx-auto" />
            <Button class="mt-4 w-[172px] h-[46px] flex justify-center">Découvrir</Button>
        </div>
        <img src="@/assets/icons/down-arrow.svg" alt="arrow-down" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[100px]" />
    </div>
</template>