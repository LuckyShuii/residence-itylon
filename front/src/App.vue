<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Toast from 'primevue/toast'

const wrapperRef = ref<HTMLElement | null>(null)
const messageWrapperRef = ref<HTMLElement | null>(null)
const ro = ref<ResizeObserver | null>(null)

const updatePadding = () => {
  const h = messageWrapperRef.value?.getBoundingClientRect().height ?? 0
  if (wrapperRef.value) wrapperRef.value.style.paddingBottom = `${h}px`
}

onMounted(() => {
  // au cas où la taille change (responsif, zoom, langue, etc.)
  ro.value = new ResizeObserver(updatePadding)
  if (messageWrapperRef.value) ro.value.observe(messageWrapperRef.value)
  window.addEventListener('resize', updatePadding)
  updatePadding()
})

onUnmounted(() => {
  ro.value?.disconnect()
  window.removeEventListener('resize', updatePadding)
})
</script>

<template>
  <div ref="wrapperRef" class="flex flex-col min-h-screen">
    <Toast />
    <Header />

    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer class="flex-shrink-0" />

    <div
      ref="messageWrapperRef"
      class="fixed bottom-0 left-0 right-0 z-20"
      role="region"
      aria-label="Information disponibilité formulaire"
    >
      <Message
        :closable="false"
        severity="error"
        class="flex justify-center text-center px-6 sm:px-12 lg:px-20 py-4 sm:py-5"
        role="alert"
      >
        <p>
          Le formulaire de contact est actuellement indisponible en raison d’un problème technique.
          Il sera de retour dès que possible.
          <br />
          En attendant, vous pouvez nous joindre par mail ou téléphone :
          📞 06.07.73.12.25 &nbsp;|&nbsp; 📧 residence.itylon@gmail.com
          <br />
          Nous sommes désolés pour la gêne occasionnée.
        </p>
      </Message>
    </div>
  </div>
</template>

<style>
  .min-h-screen { min-height: 100vh; }
</style>
