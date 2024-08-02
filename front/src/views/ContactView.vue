<script setup lang="ts">
import ContactForm from '../components/Contact/ContactForm.vue'
import UsefulInfo from '../components/Contact/UsefulInfo.vue'
import FindUs from '../components/Contact/FindUs.vue'
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
</script>

<template>
  <TopImageBlock title="Contact" paragraph="Vous avez une question ? Vous souhaitez faire une réservation ? N’hésitez pas à nous contacter !" image-src="../src/assets/photos/contact/a%20residence%20(16).jpg" />
  <div class="flex w-full justify-center">
    <ContactForm />
    <div class="flex flex-col w-[670px]">
      <UsefulInfo />
      <FindUs />
    </div>
  </div>
</template>