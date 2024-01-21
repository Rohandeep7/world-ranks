<template>
  <div class="bg-[#1B1D1F]">
    <div class="relative">
      <Image img-class="w-full" :src="HERO_GLOBE_IMAGE" />
      <Image
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[18%]"
        :src="WEBSITE_LOGO"
      />
    </div>
  </div>
</template>

<script setup>
import Image from "./components/common/Image.vue";
import HERO_GLOBE_IMAGE from "./assets/hero-image-wr.jpg";
import WEBSITE_LOGO from "./assets/Logo.svg";
</script>

<style scoped></style>
