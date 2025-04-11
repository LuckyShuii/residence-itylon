<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const heroContainer = document.getElementById('hero-container');
    setTimeout(() => {
        if (heroContainer) {
            heroContainer.classList.remove('opacity-0');
            heroContainer.classList.add('opacity-100');
        }
    }, 250);

    const arrow = document.getElementById('arrow-down');
    if (arrow) {
        arrow.addEventListener('click', () => {
            const nextSection = document.getElementById('scroll-target');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
</script>

<template>
  <div
    id="hero-container"
    class="relative h-screen overflow-hidden opacity-0 transition-opacity duration-700 ease-in-out"
  >
    <video
      class="absolute top-0 left-0 z-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
    >
      <source
        src="https://www.residence-itylon.com/media/videos/video-home-cut.mp4"
        type="video/mp4"
      />
    </video>

    <div
      class="relative z-10 flex items-center flex-col justify-center h-full text-center px-4"
    >
      <img
        src="@/assets/logo/logo-header.svg"
        alt="logo"
        class="mx-auto w-[80%] max-w-[700px] sm:max-w-[500px] mb-6"
      />

      <p
        class="text-white font-dm-sans font-extrabold text-[20px] tracking-[0.16em] mb-4"
      >
        LOCATION SAISONNIÈRE
      </p>

      <RouterLink to="/contact?page=reservation">
        <Button
          class="mt-2 w-[172px] h-[46px] flex justify-center text-white"
        >
          RÉSERVER
        </Button>
      </RouterLink>
    </div>

    <img
      id="arrow-down"
      src="@/assets/icons/down-arrow.svg"
      alt="arrow-down"
      class="cursor-pointer absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[60px] w-[40px] h-[40px] animate-bounce z-20"
    />
  </div>

  <div id="scroll-target"></div>
</template>
