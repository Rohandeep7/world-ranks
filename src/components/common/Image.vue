<template>
  <Transition name="slide-bottom-fade" appear>
    <v-lazy-image
      class="rounded-md"
      :class="imgClass"
      :src="src"
      :src-placeholder="srcPlaceholder"
      :alt="alt"
      :width="width"
      :height="height"
    />
  </Transition>
</template>

<script setup>
import VLazyImage from "v-lazy-image";
import { Transition } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  srcPlaceholder: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    default: "Image",
  },
  imgClass: {
    type: String,
    required: false,
  },
  width: {
    type: String,
    required: false,
  },
  height: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
@import "../../transitions.scss";
.v-lazy-image {
  filter: blur(4px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
