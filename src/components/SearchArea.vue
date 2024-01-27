<template>
  <div
    class="flex items-center flex-col-reverse sm:flex-row gap-4 justify-center sm:justify-between"
  >
    <h1
      class="font-semibold font-be-vietnam-pro text-raven text-sm sm:text-base"
    >
      {{ "Found 234 countries" }}
    </h1>
    <TextField />
  </div>
</template>

<script setup>
import TextField from "./common/TextField.vue";
</script>

<style lang="scss" scoped></style>
