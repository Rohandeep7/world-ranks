<template>
  <div>
    <header class="relative">
      <Image
        img-class="w-full h-[28vh] sm:h-[35vh] object-cover"
        :src="HERO_GLOBE_IMAGE"
      />
      <Image
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        :src="WEBSITE_LOGO"
      />
    </header>

    <main class="relative">
      <div
        class="absolute sm:top-1/2 sm:left-1/2 w-full sm:max-w-[90vw] bg-black-pearl sm:border-2 sm:border-[#282B30] rounded-lg min-h-[50vh] sm:-translate-x-1/2 sm:-translate-y-[15%] flex justify-center items-center"
      >
        <TextField />
      </div>
    </main>
  </div>
</template>

<script setup>
import TextField from "../components/common/TextField.vue";
import Image from "../components/common/Image.vue";
import HERO_GLOBE_IMAGE from "../assets/hero-image-wr.jpg";
import WEBSITE_LOGO from "../assets/Logo.svg";
</script>

<style lang="scss" scoped></style>
