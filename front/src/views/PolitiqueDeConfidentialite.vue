<script setup lang="ts">
import TopImageBlock from "@/components/layout/TopImageBlock.vue";
import { reactive } from "vue";
import type { BlockTemplateType } from '@/types/BlockTemplateType'

const blockData = reactive<BlockTemplateType>({
  title: 'Politique de confidentialité',
  paragraph: '',
  imageSrc: 'webp/residence/residence_main.webp',
});
</script>

<template>
<TopImageBlock :title="blockData.title" :paragraph="blockData.paragraph ?? 'not found'" :imageSrc="blockData.imageSrc" />

<div class="p-6 max-w-[1270px] mx-auto mt-4">    
    <section class="mb-12">
        <h2 class="font-mistress text-5xl mb-2">Introduction</h2>
        <p class="mt-6">
            Nous respectons votre vie privée. Ce site ne collecte, ne stocke ni n’utilise aucune donnée personnelle automatiquement.
        </p>
    </section>

    <section class="mb-12">
        <h2 class="font-mistress text-5xl mb-2">Données transmises volontairement</h2>
        <p class="mt-6">
            Lorsque vous utilisez notre formulaire de contact, votre message est directement envoyé par e-mail à l'adresse de la Résidence Itylon.
            Ces informations ne sont ni stockées sur le site, ni utilisées à d’autres fins que de répondre à votre demande.
        </p>
    </section>

    <section class="mb-12">
        <h2 class="font-mistress text-5xl mb-2">Cookies</h2>
        <p class="mt-6">
            Ce site n’utilise aucun cookie.
        </p>
    </section>

    <section class="mb-12">
        <h2 class="font-mistress text-5xl mb-2">Sécurité</h2>
        <p class="mt-6">
            Votre message est transmis par un protocole sécurisé (HTTPS). Nous nous engageons à protéger la confidentialité de vos communications.
        </p>
    </section>

    <section class="mb-12">
        <h2 class="font-mistress text-5xl mb-2">Vos droits</h2>
        <p class="mt-6">
            Conformément au RGPD, vous pouvez à tout moment demander l’accès, la rectification ou la suppression de vos données en nous contactant à l’adresse suivante :
            <a href="mailto:ncls.rodriguez38@gmail.com" class="underline">ncls.rodriguez38@gmail.com</a>
        </p>
    </section>

    <section>
        <h2 class="font-mistress text-5xl mb-2">Modifications</h2>
        <p class="mt-6">
            Cette politique de confidentialité peut être mise à jour à tout moment.<br />
            Dernière mise à jour : Avril 2025.
        </p>
    </section>
</div>
</template>

  