<template>
  <div>
    <header>
      <HeroImage :img-src="HERO_GLOBE_IMAGE">
        <template #content>
          <Image
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            :src="WEBSITE_LOGO"
          />
        </template>
      </HeroImage>
    </header>

    <main>
      <div class="relative">
        <SearchFilterResultsPanel />
      </div>
    </main>
  </div>
</template>

<script setup>
import HeroImage from "../components/HeroImage.vue";
import Image from "../components/common/Image.vue";
import SearchFilterResultsPanel from "../components/SearchFilterResultsPanel.vue";
import HERO_GLOBE_IMAGE from "../assets/hero-image-wr.jpg";
import WEBSITE_LOGO from "../assets/Logo.svg";
</script>

<style lang="scss" scoped></style>
