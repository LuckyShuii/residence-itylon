<script setup lang="ts">
import JoinUs from '@/components/Footer/JoinUs.vue';
import FindUs from '@/components/Footer/FindUs.vue';
import Ressources from '@/components/Footer/Ressources.vue';
</script>

<template>
    <footer class="py-[40px] bg-green-light mt-[70px]">
        <div class="max-w-[1440px] w-full mx-auto flex justify-between items-center px-[85px]">
            <img src="@/assets/logo/logo-footer.svg" alt="logo" class="ml-[-1rem]">
            <div class="flex justify-between max-w-[780px] w-full">
                <JoinUs />
                <FindUs />
                <Ressources />
            </div>
        </div>
    </footer>
</template>