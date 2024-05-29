<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <body class="bg-blue-200">
    <!-- <RouterLink to="/about">About</RouterLink> -->
    <Header />
    <main>
      <RouterView />
    </main>
  </body>
</template>