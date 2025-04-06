<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import emailjs from 'emailjs-com';
import { useToast } from 'primevue/usetoast';

declare global {
  interface Window {
    grecaptcha?: {
      render: (containerId: string, parameters: { sitekey: string }) => void;
      getResponse: () => string;
      reset: () => void;
    };
  }
}

const toast = useToast();

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  rgpd: boolean;
  recaptchaResponse: string;
}

const formData = reactive<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  rgpd: false,
  recaptchaResponse: '' 
});

const sendForm = async () => {
  const recaptchaResponse = (window as any).grecaptcha.getResponse();

  if (!recaptchaResponse) {
    toast.add({
      severity: 'error',
      summary: 'Formulaire',
      detail: 'Veuillez vérifier que vous n\'êtes pas un robot !',
      life: 6000,
    });
    return;
  }

  const templateParams = {
    name: formData.lastName,
    firstname: formData.firstName,
    phone: formData.phone,
    email: formData.email,
    message: formData.message,
    recaptchaResponse: recaptchaResponse
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_MAIL_SERVICE_ID ?? '',
      import.meta.env.VITE_MAIL_TEMPLATE_ID ?? '',
      templateParams,
      import.meta.env.VITE_MAIL_PUBLIC_KEY ?? ''
    );
    toast.add({ severity: 'success', summary: 'Formulaire', detail: 'Votre message a bien été envoyé !', life: 6000 });
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Formulaire', detail: 'Une erreur est survenue lors de l\'envoi du formulaire.' + error, life: 6000 });
  }
};

const resetForm = () => {
  formData.firstName = '';
  formData.lastName = '';
  formData.email = '';
  formData.phone = '';
  formData.message = '';
  formData.rgpd = false;
  formData.recaptchaResponse = '';

  if (window.grecaptcha) {
    window.grecaptcha.reset();
  }
};

const checkForm = async () => {
  if (Object.values(formData).some(value => value === '') && !formData.rgpd) {
    toast.add({ severity: 'error', summary: 'Formulaire', detail: 'Tous les champs sont obligatoires !', life: 6000 });
    return;
  }

  await sendForm();
  resetForm();
};

onMounted(() => {
  const interval = setInterval(() => {
    if (window.grecaptcha) {
      window.grecaptcha.render('recaptcha-container', {
        sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
      });
      clearInterval(interval);
    }
  }, 5000);
});
</script>

<template>
  <div class="w-[670px] mt-[80px]">
    <h2 class="font-mistress text-[46px] mb-[37px]">Formulaire de contact</h2>
    <form ref="formRef" class="border border-gray-200 rounded-[10px] w-full p-[41px] h-[826px]" @submit.prevent="checkForm">
      <div class="flex justify-between w-full mb-[2rem]">
        <div class="flex flex-col gap-2">
          <label for="name">Nom</label>
          <InputText id="name" v-model="formData.lastName" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="firstname">Prénom</label>
          <InputText id="firstname" v-model="formData.firstName" class="w-[262px] h-[46px] py-[5px] px-[8px] text-[16px] border border-green-btn" />
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
        <Checkbox :binary="true" id="rgpd" v-model="formData.rgpd" class="mr-2 border border-green-btn rounded-[5px] w-8 h-6" />
        <label for="rgpd" class="text-sm">J'accepte que mes données soient envoyées et traitées conformément à la <a href="/politique-de-confidentialite" class="text-blue-600 underline">politique de confidentialité</a>.</label>
      </div>
      <div class="w-full flex justify-center items-center mt-[10px]">
        <div id="recaptcha-container"></div>
      </div>
      <div class="w-full flex justify-center items-center mt-[10px]">
        <Button type="submit" label="Envoyer" class="py-[5px] w-[160px]" />
      </div>
    </form>
  </div>
</template>
