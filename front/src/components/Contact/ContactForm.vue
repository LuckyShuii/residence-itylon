<script setup lang="ts">
import { reactive } from 'vue';
import {useToast} from "primevue/usetoast";

const toast = useToast()

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  rgpd: boolean;
}

const formData = reactive<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  rgpd: false
});

const checkForm = (): void => {
  if (Object.values(formData).some(value => value === '')) {
    toast.add({ severity: 'error', summary: 'Formulaire', detail: 'Tous les champs sont obligatoires !', life: 6000 });
    return;
  }

  toast.add({ severity: 'success', summary: 'Formulaire', detail: 'Votre message a bien été envoyé !', life: 6000 });
}
</script>

<template>
  <div class="w-[670px] mt-[80px]">
    <h2 class="font-mistress text-[46px] mb-[37px]">Formulaire de contact</h2>
    <form method="POST" action="" class="border border-gray-200 rounded-[10px] w-full p-[41px] h-[826px]" @submit.prevent="checkForm">
      <div class="flex justify-between w-full mb-[2rem]">
        <div class="flex flex-col gap-2">
          <label for="lastName">Nom</label>
          <InputText id="lastName" v-model="formData.lastName" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="firstName">Prénom</label>
          <InputText id="firstName" v-model="formData.firstName" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
      </div>
      <div class="flex justify-between w-full mb-[2rem]">
        <div class="flex flex-col gap-2">
          <label for="email">Email</label>
          <InputText id="email" v-model="formData.email" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="phone">Téléphone</label>
          <InputText type="tel" id="phone" v-model="formData.phone" placeholder="0606060606" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" v-model="formData.message" rows="5" cols="30" class="w-full border border-green-btn rounded-[10px] h-[310px] py-[5px] px-[8px] text-[16px]"></textarea>
      </div>

      <div class="flex items-center mt-4">
        <Checkbox :binary="true" id="rgpd" v-model="formData.rgpd" class="mr-2 border border-green-btn rounded-[5px]" />
        <label for="rgpd" class="text-sm">J'accepte que mes données soient envoyées et traitées conformément à la <a href="/politique-de-confidentialite" class="text-blue-600 underline">politique de confidentialité</a>.</label>
      </div>
      <div class="w-full flex justify-center items-center mt-[20px]">
        <Button type="submit" label="Envoyer" class="mt-[25px] py-[5px] w-[160px]" />
      </div>
    </form>
  </div>
</template>
