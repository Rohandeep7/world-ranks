<template>
  <div class="flex">
    <Select :options="SORT_BY_OPTIONS" />
  </div>
</template>

<script setup>
import Select from "./common/Select.vue";
import { SORT_BY_OPTIONS } from "../constants";
</script>

<style lang="scss" scoped></style>
