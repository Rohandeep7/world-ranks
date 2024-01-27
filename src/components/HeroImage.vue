<template>
  <div class="relative">
    <Image img-class="w-full h-[28vh] sm:h-[35vh] object-cover" :src="imgSrc" />
    <slot name="content">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <h1 class="text-xl text-link-water font-be-vietnam-pro">
          {{ "Present your logo here" }}
        </h1>
      </div>
    </slot>
  </div>
</template>

<script setup>
import Image from "./common/Image.vue";

const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
