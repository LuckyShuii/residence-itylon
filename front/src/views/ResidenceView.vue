<script setup lang="ts">
import { ref, onMounted, reactive, watch, nextTick } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useRoute } from 'vue-router';
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import type { BlockTemplateType } from '@/types/BlockTemplateType';

const route = useRoute();

const toast = useToast();

const blockData = reactive<BlockTemplateType>({
  title: 'La résidence',
  imageSrc: '../src/assets/photos/activities/plage.jpg'
});

const generateBasicBlockData = () => {
  blockData.title = "Les activités";
  blockData.paragraph = "Voluptate vitae quo maxime asperiores. Mollitia iusto qui nemo deserunt magni aut reiciendis consequuntur. Accusantium sunt ducimus assumenda. Praesentium est laborum numquam repellendus";
  blockData.imageSrc = "../src/assets/photos/activities/plage.jpg";
};

</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph" :image-src="blockData.imageSrc" />
  <div ref="activityContainer" class="w-full flex justify-center items-center opacity-0 transition-opacity duration-500">
    Residence
  </div>
</template>
