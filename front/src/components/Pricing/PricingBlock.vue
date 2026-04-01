<script setup lang="ts">
const props = withDefaults(defineProps<{
    imageSrc: string;
    alt?: string;
}>(), {
    alt: "Tarifs 2026"
});

</script>

<template>
    <div class="w-full lg:basis-3/4 border border-[green-btn] rounded-[20px] overflow-hidden">
        <img 
            loading="lazy" 
            :src="'/' + props.imageSrc" 
            :alt="props.alt" 
            class="w-full h-full object-cover"
        />
    </div>
</template>