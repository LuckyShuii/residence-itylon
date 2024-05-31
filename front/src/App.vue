<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Toast from 'primevue/toast';
</script>

<template>
  <div class="bg-blue-200">
    <Toast />
    <Header />
    <main>
      <RouterView />
    </main>
  </div>
</template>