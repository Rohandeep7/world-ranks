<template>
  <v-icon
    :name="name"
    :animation="animation"
    :hover="hover"
    :speed="speed"
    :scale="scale"
    :flip="flip"
    :fill="fill"
    :label="label"
    :title="title"
    :inverse="inverse"
  >
  </v-icon>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  animation: {
    type: String,
  },
  hover: {
    type: Boolean,
    default: false,
  },
  speed: {
    type: String,
    default: "slow",
  },
  scale: {
    type: String,
    default: "1",
  },
  flip: {
    type: String,
  },
  fill: {
    type: String,
  },
  label: {
    type: String,
  },
  title: {
    type: String,
  },
  inverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
