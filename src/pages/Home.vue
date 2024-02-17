<template>
  <div>
    <header>
      <HeroImage :img-src="HERO_GLOBE_IMAGE">
        <template #content>
          <Image
            img-class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8 z-10 w-28 sm:w-44"
            :src="WEBSITE_LOGO"
          />
        </template>
      </HeroImage>
    </header>

    <main>
      <div class="relative">
        <div
          class="p-6 absolute sm:left-1/2 w-full sm:w-auto sm:max-w-[90vw] sm:min-w-[50vw] bg-black-pearl sm:border-2 sm:border-bunker sm:rounded-lg sm:-translate-x-1/2 -translate-y-6 sm:-translate-y-10"
        >
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import HeroImage from "../components/HeroImage.vue";
import Image from "../components/common/Image.vue";
import HERO_GLOBE_IMAGE from "../assets/hero-image-wr.jpg";
import WEBSITE_LOGO from "../assets/Logo.svg";
</script>

<style lang="scss" scoped></style>
