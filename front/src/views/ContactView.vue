<script setup lang="ts">
import ContactForm from '../components/Contact/ContactForm.vue'
import UsefulInfo from '../components/Contact/UsefulInfo.vue'
import FindUs from '../components/Contact/FindUs.vue'
</script>

<template>
  <div class="custom-bg " style="background-image: url('../assets/photos/contact/a%20residence%20(16).jpg');">
    <img src="../assets/photos/contact/a%20residence%20(16).jpg" alt="contact" class="image"/>
  </div>
  <div class="flex w-full justify-center">
    <ContactForm />
    <div class="flex flex-col w-[670px]">
      <UsefulInfo />
      <FindUs />
    </div>
  </div>
</template>

<style scoped>
.custom-bg {
  width: 100%;
  height: 460px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>