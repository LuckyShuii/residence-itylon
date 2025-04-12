<script setup lang="ts">
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import { reactive } from "vue";
import type { BlockTemplateType } from '@/types/BlockTemplateType';

const blockData = reactive<BlockTemplateType>({
  title: 'Mentions légales',
  paragraph: '',
  imageSrc: 'webp/residence/residence_main.webp',
});
</script>

<template>
  <TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph ?? 'not found'" :imageSrc="blockData.imageSrc" />

  <div class="p-6 max-w-[1270px] mx-auto mt-4">
    <!-- Éditeur du site -->
    <section class="mb-12">
      <h2 class="font-mistress text-5xl mb-2">Éditeur du site</h2>
      <p class="mt-6">
        <strong>Nom du site :</strong> https://residence-itylon.com<br />
        <strong>Développé par :</strong> Lucas BOILLOT (tout développé)<br />
        <strong>Design imaginé par :</strong> Azraël Landres (<a href="https://www.linkedin.com/in/azraellandres/" target="_blank" class="underline text-blue-700">linkedin.com/in/azraellandres)</a><br />
        <strong>Statut :</strong> Site réalisé gratuitement (non auto-entrepreneur)<br />
        <strong>Email :</strong> <a href="mailto:lucasnimes30000@gmail.com" class="underline">lucasnimes30000@gmail.com</a><br />
        <strong>Téléphone :</strong> +33 7 79 99 23 33<br />
        <strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/lucas-boillot/" class="underline" target="_blank">https://www.linkedin.com/in/lucas-boillot/</a><br />
        <strong>Site :</strong> <a href="https://lucasboillot.fr" class="underline" target="_blank">https://lucasboillot.fr</a>
      </p>
    </section>


    <!-- Hébergeur -->
    <section class="mb-12">
      <h2 class="font-mistress text-5xl mb-2">Hébergeur</h2>
      <p class="mt-6">
        <strong>Nom de l’hébergeur :</strong> Hosterfy<br />
        <strong>Informations générales :</strong> NETFY SARL au capital de 6 000 euros<br />
        <strong>Siège social :</strong> 5 boulevard Vincent Gâche, 44200 Nantes<br />
        <strong>RCS :</strong> 912 407 558 R.C.S. Nantes<br />
        <strong>N° TVA :</strong> FR56 912407558
      </p>
    </section>

    <!-- Responsable de traitement des données (DPO) -->
    <section class="mb-12">
      <h2 class="font-mistress text-5xl mb-2">Responsable de traitement des données (DPO)</h2>
      <p class="mt-6">
        <strong>Nom :</strong> Sébastien Berranger<br />
        <strong>Email :</strong> <a href="mailto:sebastien.berranger@hosterfy.com" class="underline">sebastien.berranger@hosterfy.com</a><br />
        <strong>Téléphone :</strong> +33 9 72 51 19 35 (choix 3)
      </p>
    </section>

    <!-- Propriété intellectuelle -->
    <section class="mb-12">
      <h2 class="font-mistress text-5xl mb-2">Propriété intellectuelle</h2>
      <p class="mt-6">
        L’ensemble des contenus présents sur le site (textes, images, logos, éléments graphiques…) est protégé par les lois en vigueur sur la propriété intellectuelle.
        Toute reproduction, distribution ou utilisation sans autorisation est strictement interdite.
      </p>
    </section>

    <!-- Données personnelles -->
    <section class="mb-12">
      <h2 class="font-mistress text-5xl mb-2">Données personnelles</h2>
      <p class="mt-6">
        Conformément à la réglementation en vigueur (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles.
        Pour exercer ce droit, merci de contacter <a href="mailto:ncls.rodriguez38@gmail.com" class="underline">ncls.rodriguez38@gmail.com</a>.
        Les informations collectées via nos formulaires sont uniquement utilisées pour répondre à vos demandes et ne sont jamais revendues à des tiers.
      </p>
    </section>

    <!-- Cookies -->
    <section class="mb-12">
      <h2 class="font-mistress text-5xl mb-2">Cookies</h2>
      <p class="mt-6">
        Le site utilise uniquement des cookies strictement nécessaires à son fonctionnement et à la navigation.
        Aucun cookie publicitaire ou de suivi n'est utilisé sans votre consentement.
        Vous pouvez configurer votre navigateur pour refuser les cookies si vous le souhaitez.
      </p>
    </section>
  </div>
</template>
