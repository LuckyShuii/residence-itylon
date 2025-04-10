<script setup lang="ts">
</script>

<template>
    <div class="container max-w-[860px] max-[980px]:w-full max-[980px]:flex max-[980px]:flex-col max-[980px]:items-center">
        <div class="grid grid-cols-12 gap-4 max-[980px]:w-[90%] max-[640px]:flex max-[640px]:flex-col max-[640px]:justify-center">
            <div class="col-span-4 h-[225px] bg-gray-200 rounded-lg overflow-hidden">
                <img loading="lazy" :src="'/photos/home/image1.jpg'" alt="Image 1" class="w-full h-full object-cover">
            </div>
            <div class="col-span-4 h-[225px] bg-gray-200 rounded-lg overflow-hidden">
                <img loading="lazy" :src="'/photos/home/image2.jpg'" alt="Image 2" class="w-full h-full object-cover">
            </div>
            <div class="col-span-4 h-[225px] bg-gray-200 rounded-lg overflow-hidden">
                <img loading="lazy" :src="'/photos/home/image3.jpg'" alt="Image 3" class="w-full h-full object-cover">
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4 mt-4 max-[980px]:w-[90%] max-[640px]:flex max-[640px]:flex-col max-[640px]:justify-center">
            <div class="col-span-7 h-[270px] bg-gray-200 rounded-lg overflow-hidden">
                <img loading="lazy" :src="'/photos/home/image4.jpg'" alt="Image 4" class="w-full h-full object-cover">
            </div>
            <div class="col-span-5 h-[270px] bg-gray-200 rounded-lg overflow-hidden">
                <img loading="lazy" :src="'/photos/home/image5.jpg'" alt="Image 5" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</template>