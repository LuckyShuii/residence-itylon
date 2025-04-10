<script setup lang="ts">
import JoinUs from '@/components/Footer/JoinUs.vue';
import FindUs from '@/components/Footer/FindUs.vue';
import Ressources from '@/components/Footer/Ressources.vue';
import { useResidenceStore } from '@/store/ResidenceStore';
import { onMounted } from 'vue';

const { loadResidences } = useResidenceStore();

onMounted(async () => {
    await loadResidences();
});

</script>

<template>
    <footer class="py-[40px] bg-green-light mt-[70px] flex-shrink-0 max-[1170px]:p-0">
        <div class="max-w-[1440px] w-full mx-auto flex justify-between items-center px-[85px] max-[1170px]:flex-col-reverse">
            <img loading="lazy" src="@/assets/logo/logo-footer.svg" alt="logo" class="ml-[-1rem] max-[1170px]:my-8">
            <div class="flex justify-between max-w-[780px] w-full max-[1170px]:flex-col max-[1170px]:items-center max-[1170px]:mt-12">
                <JoinUs class="max-[1170px]:mb-8" />
                <FindUs class="max-[1170px]:mb-8"  />
                <Ressources />
            </div>
        </div>
    </footer>
</template>
