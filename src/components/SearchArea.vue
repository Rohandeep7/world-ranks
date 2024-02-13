<template>
  <div
    class="flex items-center flex-col-reverse sm:flex-row gap-4 justify-center sm:justify-between"
  >
    <h1
      class="font-semibold font-be-vietnam-pro text-raven text-sm sm:text-base"
    >
      {{ `Found ${numberOfCountriesFound} countries` }}
    </h1>
    <TextField @on-debounced-trigger="updateInputText" />
  </div>
</template>

<script setup>
import TextField from "./common/TextField.vue";

const props = defineProps({
  numberOfCountriesFound: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["onTextChange"]);

const updateInputText = (value) => {
  emit("onTextChange", value);
};
</script>

<style lang="scss" scoped></style>
