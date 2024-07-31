<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const generateFormData = () => {
  return {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    message: messageText.value,
  }
}

const firstName = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')
const phone = ref<string>('')
const messageText = ref<string>('')
const formData = ref<FormData>(generateFormData())

const checkForm = (): void => {
  formData.value = generateFormData()
  console.log(formData.value)
  if (Object.entries(formData.value).some(([key, value]) => value === '')) {
    console.log("Found an empty input")
  }
}
</script>

<template>
  <div class="w-[670px] mt-[80px]">
    <h2 class="font-mistress text-[46px] mb-[37px]">Formulaire de contact</h2>
    <form method="POST" action="" class="border border-gray-200 rounded-[10px] w-full p-[41px]" @submit.prevent="checkForm">
      <div class="flex justify-between w-full mb-[2rem]">
        <div class="flex flex-col gap-2">
          <label for="lastName">Nom</label>
          <InputText id="lastName" v-model="lastName" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="firstName">Prénom</label>
          <InputText id="firstName" v-model="firstName" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
      </div>
      <div class="flex justify-between w-full mb-[2rem]">
        <div class="flex flex-col gap-2">
          <label for="email">Email</label>
          <InputText id="email" v-model="email" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="phone">Téléphone</label>
          <InputText type="tel" id="phone" v-model="phone" placeholder="0606060606" fluid class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
      </div>
      {{messageText}}
      <Textarea v-model="messageText" rows="5" cols="30" class="w-full border border-gray-200 rounded-[10px] w-full h-[310px] py-[5px] px-[8px] text-[16px] border border-green-btn" />

      <Button type="submit" label="Envoyer" class="mt-[25px] py-[5px] w-[160px]" />
    </form>
  </div>
</template>