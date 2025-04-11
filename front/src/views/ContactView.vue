<script setup lang="ts">
import ContactForm from '../components/Contact/ContactForm.vue'
import UsefulInfo from '../components/Contact/UsefulInfo.vue'
import FindUs from '../components/Contact/FindUs.vue'
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import { reactive, watch } from "vue";
import { useRoute } from 'vue-router'
import type { BlockTemplateType } from '@/types/BlockTemplateType'
const route = useRoute()

const blockData = reactive<BlockTemplateType>({
  title: '',
  paragraph: 'Vous avez une question ? Vous souhaitez faire une réservation ?<br> N’hésitez pas à nous contacter !',
  imageSrc: 'webp/contact/a%20residence%20(16).webp'
});

watch(() => route.query, (newQuery) => {
  if (newQuery.page && newQuery.page === "reservation") {
    blockData.title = "Réservation"
  } else {
    blockData.title = 'Contact';
  }
}, { immediate: true })

</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph ?? ''" :imageSrc="blockData.imageSrc" />
  <div class="flex w-full justify-center max-[1450px]:flex-col max-[1450px]:items-center max-[1450px]:gap-10 max-[1450px]:px-4">
    <ContactForm />
    <div class="flex flex-col w-full max-w-[670px] max-[1450px]:items-center ">
      <UsefulInfo />
      <FindUs />
    </div>
  </div>
</template>