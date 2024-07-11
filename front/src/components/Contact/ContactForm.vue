<script setup lang="ts">
import { ref, onMounted } from 'vue';

const firstName = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')
const phone = ref<string>('')
const message = ref<string>('')
</script>

<template>
  <div class="w-[670px]">
    <h2 class="font-mistress text-[40px]">Formulaire de contact</h2>
    <form method="POST" action="" class="border border-gray-200 rounded-[10px] w-full p-[41px]">
      <div class="flex justify-between w-full mb-[2rem]">
        <div class="flex flex-col gap-2">
          <label for="lastName">Nom</label>
          <InputText id="lastName" v-model="lastName" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px]" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="firstName">Prénom</label>
          <InputText id="firstName" v-model="firstName" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px]" />
        </div>
      </div>
      <div class="flex justify-between w-full mb-[2rem]">
        <div class="flex flex-col gap-2">
          <label for="email">Email</label>
          <InputText id="email" v-model="email" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px]" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="phone">Téléphone</label>
          <InputMask id="phone" v-model="phone" mask="06 06 06 06 06" placeholder="06 06 06 06 06" fluid class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px]" />
        </div>
      </div>
      <Textarea v-model="message" rows="5" cols="30" class="w-full border border-gray-200 rounded-[10px] w-full py-[5px] px-[8px] text-[16px]" />
    </form>
  </div>
</template>